<template>
	<div class="problem-wrapper">
		<p class="is-size-3 mt-2 has-text-weight-bold">Enter missing numbers in oragne boxes</p>
		<div class="numbers-container">
            <table class="table is-bordered">
                <tbody>
                    <tr v-for="(row, index) in numbersArray" :key="index">
                        <td v-for="(cell, ind) in row" :key="ind" class="numbers-cell">
                            <p class="is-size-4">{{cell}}</p>
                        </td>
                        <td class="missing-numbers-cell">
                            <p class="is-size-4 has-text-weight-bold">
                                {{missingNumbers[index +2 ]}}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>			
		</div>
        <div class="error">
            <div v-if="error">
                <i class="fas fa-exclamation-triangle" style="color:red; font-size:2em;"></i>
            </div>
        </div>
		<div class="columns is-multiline is-mobile answers">
			<div class="column" v-for="(n, index) in 10" :key="index">
				<div class="answer center" @click="fillInMissingNumber(index + 1)"><p class="is-size-4 has-text-weight-bold">{{(index+1)*10}}</p></div>
			</div>
		</div>

        <div @click="checkAnswer" class="answer-container">

		<i class="far fa-check-circle" ></i>
		</div>	
		
	</div>
</template>

<script>
import {objectHasNull, getRandomInt} from '../../../helpers.js';
export default {
  beforeRouteEnter (to, from, next) {
       next(vm => vm.generateNumbers());
   
	},
  beforeRouteUpdate (to, from, next) {
	    this.numbersArray = [];
	  
	    this.generateNumbers();
	    next();
	   
	},

  data() {
    return {
      numbersArray: [],
      missingNumbers: '',
      error: false
    };
  },
  methods: {
  	checkAnswer() {
  		if (!objectHasNull(this.missingNumbers)) {
  			this.$router.push({ name: 'check-answer', params: { result: 'correct' } });
  		} else {
  			this.$router.push({ name: 'check-answer', params: { result: 'incorrect' } });
  		}
      },
      
    fillInMissingNumber(n) {
        this.error = false;
        if (n in this.missingNumbers) {
            this.missingNumbers[n] = n * 10;
        } else {
            this.error = true;
        }
       
    },
  	generateNumbers() {
        let array = [];
        let missingNumbers = {};
        const upperLimit = getRandomInt(6) + 5;
        for (let i=2; i < upperLimit; i++) {
            let innerArray = [];
            for (let j =  1; j < 10; j++) {
                innerArray.push((i-1) * 10 + j);
            }
            array.push(innerArray);
            missingNumbers[i] = null;

        }

        this.numbersArray = array;
        this.missingNumbers = missingNumbers;
  	}
  }

}
</script>

<style scoped>
.problem-wrapper {
	background: white url(~/../images/8e601a62-7502-447c-a97b-a44e6cab87ae.jpg) center / cover;
    padding-bottom: 5em;
}



.answers {
	width: 50%;
}

.numbers-container {
    margin-top: 2em;
    margin-bottom: 2em;
}

.error {
   min-height: 3em;
   margin-bottom: 2em;
}


@media only screen and (min-width: 1025px) {

	.answers {
		width: 35%;
	}
}

td {
    min-width:4em;
    text-align: center;
}

.numbers-cell {
    background: rgba(255,252,75,0.65);
}

.missing-numbers-cell {
    background: orange;
}

.answer {
	width: 60px;
	height: 60px;
	border: 1px black solid;
	background: rgba(255,252,75,0.65);
	cursor: pointer;
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