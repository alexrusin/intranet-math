<template>
	<div class="problem-wrapper">
		<p class="is-size-3 mt-2 has-text-weight-bold">Touch in the green box to make {{answer}} balls</p>
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
			ceiling: 9,
			answer: 0,
			count: 0,
			ballsArray: []
		};
	},

	methods: {
		generateAnswer() {
			let randomInt = getRandomInt(9);
			this.answer = (randomInt + 1) * 10;
		},

		addBalls() {
			if (this.count <= this.ceiling) {
				this.count++;
				this.ballsArray.push(this.count*10);
			}
		},

		removeBalls() {
			this.count--;
			this.ballsArray.splice(-1,1);
			
		},

		checkAnswer() {
  		if ((this.count * 10) === this.answer) {
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
	background: white url(~/../images/96f41eb6-e9fb-4692-831b-3df9fa157de9.jpg) center / cover;
    padding-bottom: 15em;
}

.ball-container {
	display: flex;
	flex-wrap: wrap;
	padding: 2.5em;
    width: 90%;
    min-height: 20em;
    background: white url(~/../images/green_box.jpg) center / cover;
}

.ball {
	background: black url(~/../images/7faccb92-b4d1-4cee-a3c8-ea7882e21ddf.png) center;
	width: 11em;
	height: 4em;
	margin: 0.5em;
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
	color: green;
	cursor: pointer;
}
</style>