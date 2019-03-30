<template>
	<div class="wrapper">
		<div v-if="endOfLessonMessage">
			<p class="is-size-4 result-message" v-text="endOfLessonMessage"></p>
			<p class="is-size-4 result-message">For more problems and grade levels please visit <a href="http://internetmath.net" target="_blank" class="has-text-info">InternetMath.net</a></p>
		</div> 
		<div v-else>
			<div class="correct" v-if="result">
				<i class="far fa-check-circle is-size-1 has-text-primary"></i>
				<p class="is-size-4 has-text-primary result-message">The answer is correct</p>
			</div>
			<div class="incorrect" v-else>
				<i class="far fa-times-circle is-size-1 has-text-danger"></i>
				<p class="is-size-4 has-text-danger result-message">Sorry. The answer is incorrect</p>
			</div>
		</div>
		
			
		<button v-if="!endOfLessonMessage" type="button" class="button is-primary is-large" @click="nextQuestion">Next</button>

		<button v-else type="button" class="button is-primary is-large" @click="startOver">Start Over</button>
		
	</div>
</template>
<script>
import {getRandomInt} from '../helpers'
export default {
	created() {
		this.result = this.$route.params.result === 'correct' ? true : false;
	},

	computed: {
    	grade () {
	      return this.$store.state.grade;
	    },

	    lessons() {
	    	return this.$store.state.lessons[this.grade];
	    },

	    lessonData() {
	    	return this.$store.state.lessonData;
	    },

	    startOverPathName() {
	    	return this.$store.state.lessons.startOverPathName;
	    }
	  },

	data() {
		return {
			result: false,
			endOfLessonMessage: null
		}
	},

	methods: {

		nextQuestion() {
			if (this.result) {
				this.$store.commit('incrementCorrect');
			} else {
				this.$store.commit('incrementIncorrect');
			}

			if (this.lessonData.currentProblem === this.lessonData.numberOfProblems) {

			this.endOfLessonMessage = 'You correctly answered ' + this.lessonData.correct + ' out of ' + this.lessonData.numberOfProblems + ' problems';

			} else {
				this.$store.commit('incrementCurrentProblem');
				let nextLesson = getRandomInt(this.lessons.length);
				this.$router.push({name: this.lessons[nextLesson]});
			}
			
		},

		startOver() {
			this.$store.commit('setMenuHeader', true);
			this.$router.push({name: this.startOverPathName});
		}
	}

}
</script>

<style scoped>
.correct, .incorrect {
	text-aligin: center;
}
.wrapper {
	flex-direction: column;
    text-align: -webkit-center;
    justify-content: space-between;
}

.result-message {
	margin-top: 2em;
	margin-bottom: 2em;
}
</style>
