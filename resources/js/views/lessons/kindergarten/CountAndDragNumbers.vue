<template>
	<div class="wrapper">
		<p class="is-size-3 has-text-weight-bold" style="margin-top:1em;">Count and drag numbers in order to green box</p>
			<draggable :list="areaArray" animation="200" group="visibility" tag="div" class="columns is-multiline is-mobile mobile-margin">
				<div class="column" v-for="(number, index) in arrayOfNumbers" :key="index">
					<div class="ball"><p v-text="number" class="is-size-4 has-text-weight-bold"></p></div>
				</div>
			</draggable>
		
		
			<div class="green-box">
				<draggable :list="areaArray" animation="200" group="visibility" tag="div" class="columns is-multiline is-mobile mobile-margin">
					<div class="column" v-for="(nb, ind) in areaArray" :key="ind">
						<div class="ball"><p v-text="nb" class="is-size-4 has-text-weight-bold"></p></div>
					</div>
				</draggable>
			</div>
		
		
	</div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
        draggable
    },
  beforeRouteEnter (to, from, next) {
       next(vm => vm.generateNumbersArray());
   
	},
  beforeRouteUpdate (to, from, next) {
	    this.numberOfBalls = 0
	  
	    this.generateNumbersArray();
	    next();
	   
	},
  data() {
    return {
      arrayOfNumbers: [],
      areaArray: []
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
  	generateNumbersArray() {
  		let N = Math.floor(Math.random() * 9) + 6;
  		this.arrayOfNumbers = Array.apply(null, {length: N}).map(function(value, index){
		  return index + 1;
		});
		console.log(this.arrayOfNumbers);
  	}
  }

}
</script>

<style scoped>
.wrapper {
	padding: 2em;
	background: black url(~/../images/97f33134-2aaa-4866-b364-8f52821513c9.png) center / cover;
	height: 95vh;
	display: flex;
    flex-direction: column;
    text-align: -webkit-center;
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

.green-box {
	width: 90%;
	border: 3px solid white;
	background: rgb(0, 210, 156);
	margin-top: 10em;
	height: 10em;
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

</style>