<template>
	<div class="problem-wrapper">
		<p class="is-size-3 mt-2 has-text-weight-bold">How Many Balls?</p>
		<div class="ball-container">
			
		<div class="ball" v-for="ball in numberOfBalls">
			<p class="is-size-4 has-text-weight-bold">10</p>
		</div>
			
		</div>
		<div class="columns is-multiline is-mobile answers">
			<div class="column" v-for="(n, index) in 10">
				<div class="answer center" @click="checkAnswer(index + 1)"><p class="is-size-4 has-text-weight-bold">{{(index+1)*10}}</p></div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
       next(vm => vm.generateBalls());
   
	},
  beforeRouteUpdate (to, from, next) {
	    this.numberOfBalls = 0
	  
	    this.generateBalls();
	    next();
	   
	},

  data() {
    return {
      numberOfBalls: 1,
      }
  },
  methods: {
  	checkAnswer(n) {
  		if (n === this.numberOfBalls) {
  			this.$router.push({ name: 'check-answer', params: { result: 'correct' } });
  		} else {
  			this.$router.push({ name: 'check-answer', params: { result: 'incorrect' } });
  		}
  	},
  	generateBalls() {
  		this.numberOfBalls = Math.floor(Math.random() * 9) + 1;
  	}
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
	justify-content: center;
	padding: 2.5em;
    width: 90%;
    min-height: 20em;
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

.answers {
	width: 50%;
}


@media only screen and (min-width: 1025px) {

	.answers {
		width: 35%;
	}
}

.answer {
	width: 60px;
	height: 60px;
	border: 1px black solid;
	background: rgba(255,252,75,0.65);
	cursor: pointer;
}

</style>