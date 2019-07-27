<template>
	<div class="problem-wrapper">
		<p class="is-size-3 mt-2 has-text-weight-bold">{{ action }} {{ thing }}</p>

		<div class="ball-container">
			<div class="apples-container">
                <div class="term">
                    <div :class="{'apples-bg': thing === 'Apples'}" class="ball" v-for="(apple, index) in termOne" :key="index">
                        <p class="is-size-4 has-text-weight-bold"></p>
                    </div>
                </div>
                <div class="operator-sign">
                    <i class="fas fa-plus" v-if="action == 'Add'"></i>
                    <i class="fas fa-minus" v-if="action == 'Subtract'"></i>
                </div>
                 <div class="term">
                    <div :class="{'apples-bg': thing === 'Apples'}" class="ball" v-for="(apple, index) in termTwo" :key="index">
                        <p class="is-size-4 has-text-weight-bold"></p>
                    </div>
                </div>
                <div class="operator-sign">
                    <i class="fas fa-equals"></i>
                </div>
                 <div class="term">
                     <div v-if="answer === 0" class="operator-sign">
                        <i class="fas fa-question"></i>
                    </div>
                    <div v-else :class="{'apples-bg': thing === 'Apples'}" class="ball" v-for="(apple, index) in answer" :key="index">
                        <p class="is-size-4 has-text-weight-bold"></p>
                    </div>
                </div>
            </div>
            <div class="apples-container numbers-container">
                <div class="term">
                    <p class="is-size-2 has-text-weight-bold">{{ termOne }}</p>
                </div>
                <div class="operator-sign">
                    <i class="fas fa-plus" v-if="action == 'Add'"></i>
                    <i class="fas fa-minus" v-if="action == 'Subtract'"></i>
                </div>
                 <div class="term">
                  
                    <p class="is-size-2 has-text-weight-bold"> {{ termTwo }}</p>
                   
                </div>
                <div class="operator-sign">
                    <i class="fas fa-equals"></i>
                </div>
                 <div class="term">
                     <div v-if="answer === 0" class="operator-sign">
                        <i class="fas fa-question"></i>
                    </div>
                    <div v-else>
                        <p class="is-size-2 has-text-weight-bold">{{ answer }}</p>
                    </div>
                </div>
            </div>
		</div>

        <div class="columns is-multiline is-mobile answers">
			<div class="column" v-for="(n, index) in 10" :key="index">
				<div class="answer center" @click="solveProblem(index + 1)"><p class="is-size-4 has-text-weight-bold">{{index+1}}</p></div>
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
       next(vm => vm.generateProblem());
   
	},
  beforeRouteUpdate (to, from, next) {
	    this.generateProblem();
	    next();
	   
	},

	data() {
		return {
            thing: '',
            action: '',
            answer: 0,
            termOne: 0,
            termTwo: 0,
            result: 0,
		};
	},

	methods: {
		generateProblem() {
            this.action = this.$route.path.split('=')[1];
            this.thing = this.$route.path.split('=')[2];
            this.answer = 0;
			this.termOne = getRandomInt(5) + 1;
            this.termTwo = getRandomInt(5) + 1;
            
            if (this.action === 'Subtract') {
                let temp;
                
                if (this.termTwo > this.termOne) {
                    temp = this.termOne;
                    this.termOne = this.termTwo;
                    this.termTwo = temp;
                }

                if (this.termOne === this.termTwo) {
                    if (this.termOne === 1) {
                        this.termOne++
                    } else {
                        this.termTwo--
                    }
                }
            }

            if (this.action === 'Add') {
                this.result = this.termOne + this.termTwo;
            } 

            if (this.action === 'Subtract') {
                this.result = this.termOne - this.termTwo;
            }
            
            
        },
        
        solveProblem(solution) {
            this.answer = solution
        },

		checkAnswer() {
  		if (this.result === this.answer) {
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
	padding: 3em;
	padding-bottom: 7em;
}

.answers {
	width: 50%;
}

@media only screen and (min-width: 1025px) {

	.answers {
		width: 35%;
	}
}
.apples-bg {
    background: url(~/../images/9898f593-379c-42e4-ab52-540d2d6b0eb6.png) center;
}
.ball {
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

.answer {
	width: 60px;
	height: 60px;
	border: 1px black solid;
	background: rgba(255,252,75,0.65);
	cursor: pointer;
}

.apples-container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    min-height: 10em;
}

.numbers-container {
    min-height: 3em;
}

.term {
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 30%;
}

.operator-sign {
    font-size: 2em;
    margin-right: 1.5em;
    margin-left: 1.5em;
}
</style>