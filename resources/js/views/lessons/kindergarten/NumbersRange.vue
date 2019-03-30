<template>
	<div class="problem-wrapper">
		<p class="is-size-3 mt-2 has-text-weight-bold">Touch the numbers {{lowerNumber}} through {{upperNumber}}</p>
			<div class="ball-container">
			<div v-for="(number, index) in numberOfBalls" :key="index">
					<div class="ball"><p v-text="number" class="is-size-4 has-text-weight-bold"></p></div>
				</div>
			</div>

		<div v-if="error">
			<i class="fas fa-exclamation-triangle" style="color:red; font-size:2em;"></i>
		</div>
		<div class="columns is-multiline is-mobile answers">
			<div class="column" v-for="(n, index) in 15">
				<div class="answer center" @click="checkAnswer(index + 1)"><p class="is-size-4 has-text-weight-bold">{{index+1}}</p></div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
       next(vm => vm.generateRange());
   
	},
  beforeRouteUpdate (to, from, next) {
	    this.numberOfBalls = 0
	  
	    this.generateRange();
	    next();
	   
	},
  data() {
    return {
      error: false,
      numberOfBalls: [],
      nextNumber: 1,
      upperNumber: 2,
      lowerNumber: 1
      }
  },
  methods: {
  	checkAnswer(n) {
  		if (n === this.nextNumber) {
  			this.error = false;
  			this.numberOfBalls.push(n);
  			if(n === this.upperNumber) {
  				setTimeout(() => { 
					this.$router.push({ name: 'check-answer', params: { result: 'correct' } });
  				}, 300);
  			} else {
  				this.nextNumber++;
  			}
  		} else {
  			this.error = true;
  		}
  	},
  	generateRange() {
  		let lowerIndex = Math.floor(Math.random() * 5);
  		let upperIndex = Math.floor(Math.random() * 5);

  		let lowerRange = Array.apply(null, {length: 6}).map(function(value, index){
		  return index + 2;
		});

  		let upperRange = Array.apply(null, {length: 6}).map(function(value, index){
		  return index + 8;
		});

		this.lowerNumber = lowerRange[lowerIndex];
		this.upperNumber = upperRange[upperIndex];
		this.nextNumber = this.lowerNumber;
		
  	}
  }

}
</script>

<style scoped>
.problem-wrapper {
	background: black url(~/../images/8e601a62-7502-447c-a97b-a44e6cab87ae.jpg) center / cover;
    padding-bottom: 5em;
}

.ball-container {
	display: flex;
    margin-right: auto;
    margin-left: auto;
    max-width: 95%;
    flex-wrap: wrap;
}

.ball {
	display: flex;
	justify-content: center;
	text-align: center;
	background: rgb(241, 251, 164);
	border: 1px solid black;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	margin-right: 1.5em;
	margin-top: 5px;
}

.answers {
	width: 50%;
}


@media only screen and (min-width: 1025px) {
	.ball p {
		line-height: 55px;
	}

	.ball {
		
		width: 60px;
		height: 60px;
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