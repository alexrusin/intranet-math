<template>
	<div class="problem-wrapper">
		<p class="is-size-3 mt-2 has-text-weight-bold">How Many Balls?</p>
		<div class="columns is-multiline is-mobile mobile-margin balls">
			<div class="column" v-for="ball in numberOfBalls">
				<div class="ball"></div>
			</div>
		</div>
		<div class="columns is-multiline is-mobile answers">
			<div class="column" v-for="(n, index) in 10">
				<div class="answer center" @click="checkAnswer(index + 1)"><p class="is-size-4 has-text-weight-bold">{{index+1}}</p></div>
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
	background: black url(~/../images/2a182d02-d321-47b3-8e3c-92d0090401c8.png) center / cover;
    padding-bottom: 10em;
}

.ball {
	background: url(~/../images/ball.png) center / cover;
	width: 80px;
	height: 80px;
	}

.mobile-margin {
		margin-top: 5em;
	}

.answers {
	width: 50%;
}

.balls {
    width: 90%;
}


@media only screen and (min-width: 1025px) {

	.ball {
		
		width: 140px;
		height: 140px;
	}

	.columns {
		width: 75%;
	}

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