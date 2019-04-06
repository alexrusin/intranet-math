<template>
	<div class="problem-wrapper">
		<p class="is-size-3 mt-2 has-text-weight-bold">Touch in the tree to make {{answer}} apples</p>
		<div class="ball-container" 
			@click="addBalls">
			<div class="ball" v-for="(ball, index) in ballsArray" :key="index" @click.stop="removeBalls">
				<p class="is-size-4 has-text-weight-bold">{{ball}}</p>
			</div>
		</div>
		
		<div @click="checkAnswer" class="answer-container">

		<i class="far fa-check-circle" ></i>
		</div>		
		
	</div>
</template>
<script>
import {getRandomInt} from '../../../helpers'
export default {
  beforeRouteEnter (to, from, next) {
       next(vm => vm.generateAnswer());
   
	},
  beforeRouteUpdate (to, from, next) {
	    this.answer = 0;
	  
	    this.generateAnswer();
	    next();
	   
	},

	data() {
		return {
			ceiling: 40,
			answer: 0,
			count: 0,
			ballsArray: []
		};
	},

	methods: {
		generateAnswer() {
			let randomInt = getRandomInt(10);
			this.answer = (randomInt + 1) + 19;
		},

		addBalls() {
			if (this.count <= this.ceiling) {
				this.count++;
				this.ballsArray.push(this.count);
			}
		},

		removeBalls() {
			this.count--;
			this.ballsArray.splice(-1,1);
			
		},

		checkAnswer() {
  		if ((this.count) === this.answer) {
  			this.$router.push({ name: 'check-answer', params: { result: 'correct' } });
  		} else {
  			this.$router.push({ name: 'check-answer', params: { result: 'incorrect' } });
  		}
  	},
		
	}
}
</script>
<style scoped>
.problem-wrapper {
	background: white url(~/../images/4ae457f2-7355-4ea0-bb00-24463e5517c4.jpg) center / cover;
    padding-bottom: 15em;
}

.ball-container {
	display: flex;
	flex-wrap: wrap;
	padding: 2.5em;
	padding-bottom: 5em;
    width: 70%;
    min-height: 20em;
}

.ball {
	background: url(~/../images/9898f593-379c-42e4-ab52-540d2d6b0eb6.png) center;
	width: 3em;
    height: 3em;
    margin: 0.2em;
	display: flex;
	text-align: center;
	justify-content: center;
	flex-direction: column;
	flex: 0 0 auto;
}

.answer-container {
	margin-top: 2em;
}

.fa-check-circle {
	font-size: 5em;
	color: #7def91;
	cursor: pointer;
}
</style>