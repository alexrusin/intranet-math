<template>
	<div class="wrapper">
		<div class="correct" v-if="result">
			<i class="far fa-check-circle is-size-1 has-text-primary"></i>
			<p class="is-size-4 has-text-primary result-message">The answer is correct</p>
		</div>
		<div class="incorrect" v-else>
			<i class="far fa-times-circle is-size-1 has-text-danger"></i>
			<p class="is-size-4 has-text-danger result-message">Sorry. The answer is incorrect</p>
		</div>
			
		<button type="button" class="button is-primary is-large" @click="nextQuestion">Next Question</button>
		
	</div>
</template>
<script>
export default {
	created() {
		this.result = this.$route.params.result === 'correct' ? true : false;
	},

	computed: {
    	grade () {
	      return this.store.state.grade
	    },

	    lessons() {
	    	return this.store.state.lessons[this.grade];
	    }
	  },

	data() {
		return {
			result: false
		}
	},

	methods: {
		getRandomInt(max) {
		  return Math.floor(Math.random() * Math.floor(max));
		},

		nextQuestion() {
			let nextLesson = this.getRandomInt(2);
			console.log(this.lessons[nextLesson]);
			this.$router.push({name: this.lessons[nextLesson]});
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
