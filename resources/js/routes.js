import CheckAnswer from './views/CheckAnswer'
import StartKindergarten from './views/StartKindergarten'
import NotFound from './views/NotFound'
import HowManyBalls from './views/lessons/kindergarten/HowManyBalls'
import NumbersRange from './views/lessons/kindergarten/NumbersRange'
import CountByTens from './views/lessons/kindergarten/CountByTens'

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'start-kindergarten',
            component: StartKindergarten
        },

        {
            path: '/lessons/kindergarten/how-many-balls',
            name: 'how-many-balls',
            component: HowManyBalls
        },

        {
            path: '/lessons/kindergarten/numbers-range',
            name: 'numbers-range',
            component: NumbersRange
        },

        {
            path: '/lessons/kindergarten/count-by-tens',
            name: 'count-by-tens',
            component: CountByTens
        },


        {
            path: '/lessons/check-answer/:result',
            name: 'check-answer',
            component: CheckAnswer
        },

		{ path: '/404', name: '404', component: NotFound },
		{ path: '*', redirect: '/404' },
    ],
};