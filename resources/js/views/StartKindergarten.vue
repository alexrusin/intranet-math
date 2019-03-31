<template>
	<div class="wrapper">
		<div class="start-message">
			<p class="is-size-4  result-message">To begin, please select number of problems</p>
		</div>
		<div class="columns is-multiline is-mobile answers">
			<div class="column">
				<div class="answer center" @click="startLesson(10)">
					<p class="is-size-4 has-text-weight-bold">10</p>
				</div>
			</div> 
			<div class="column">
				<div class="answer center" @click="startLesson(20)">
					<p class="is-size-4 has-text-weight-bold">20</p>
				</div>
			</div>
			<div class="column">
				<div class="answer center" @click="startLesson(30)">
					<p class="is-size-4 has-text-weight-bold">30</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {getRandomInt} from '../helpers'
export default {
	computed: {
		grade () {
	      return this.$store.state.grade
	    },

		lessons() {
	    	return this.$store.state.lessons[this.grade];
	    },
	},
	
	methods: {
		startLesson(numberOfProblems) {
			this.$store.commit('setGrade', 'kindergarten');
			this.$store.commit('setMenuHeader', false);
			this.$store.commit('setStartOverPathName', 'start-kindergarten');

			let lessonData = {
				numberOfProblems: numberOfProblems,
			    correct: 0,
			    incorrect: 0,
			    currentProblem: 1
			};

			this.$store.commit('initializeLessonData', lessonData);
			this.nextQuestion();
		},

		nextQuestion() {
			let nextLesson = getRandomInt(this.lessons.length);
			this.$router.push({name: this.lessons[nextLesson]});
		}
	}
}
</script>

<style scoped>
.start-message {
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

.answers {
	width: 30%;
}


.answer {
	width: 60px;
	height: 60px;
	border: 1px black solid;
	background: rgba(255,252,75,0.65);
	cursor: pointer;
}

</style>

