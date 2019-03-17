
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

import App from './views/App'
import CheckAnswer from './views/CheckAnswer'
import StartKindergarten from './views/StartKindergarten'
import NotFound from './views/NotFound'
import HowManyBalls from './views/lessons/kindergarten/HowManyBalls'
import NumbersRange from './views/lessons/kindergarten/NumbersRange'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'start-kindergarten',
            component: StartKindergarten
        },

        {
            path: '/lessons/kindergarten/how-many-balls',
            name: 'k-problem-1',
            component: HowManyBalls
        },

        {
            path: '/lessons/kindergarten/numbers-range',
            name: 'k-problem-2',
            component: NumbersRange
        },

        {
            path: '/lessons/check-answer/:result',
            name: 'check-answer',
            component: CheckAnswer
        },

		{ path: '/404', name: '404', component: NotFound },
		{ path: '*', redirect: '/404' },
    ],
});

import storeData from './store';

Vue.prototype.store = new Vuex.Store(storeData);

const app = new Vue({
    el: '#app',
    components: { App },
    router
});

// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
// (function() {
//     var burger = document.querySelector('.burger');
//     var menu = document.querySelector('#'+burger.dataset.target);
//     burger.addEventListener('click', function() {
//         burger.classList.toggle('is-active');
//         menu.classList.toggle('is-active');
//     });
// })();

document.querySelectorAll("#nav li").forEach(function(navEl) {
  navEl.onclick = function() { toggleTab(this.id, this.dataset.target);}

});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function(navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
    }
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function(tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}
