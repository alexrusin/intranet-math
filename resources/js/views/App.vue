<template>
	<div>
        <div class="hero-body" v-show="showHeader">
            <div class="container">
                <h1 class="title">
                IntranetMath
                </h1>
                <h2 class="subtitle">
                A knock-off <a href="http://internetmath.net" target="_blank">internetmath.net</a>
                </h2>
            </div>
        </div>
		<div class="tabs is-boxed is-centered main-menu" id="nav">
            <ul>
                <li data-target="pane-1" id="1">
                	<router-link :to="{ name: 'k-problem-1' }">
	                   
	                        <span class="icon is-small"><i class="fas fa-chalkboard-teacher"></i></span>
	                        <span>Kindergarten</span>
	                   
                	</router-link>
                </li>
                <li data-target="pane-2" id="2">
                    <a>
                        <span class="icon is-small"><i class="fas fa-chalkboard-teacher"></i></span>
                        <span>First Grade</span>
                    </a>
                </li>
                <li data-target="pane-3" id="3">
                    <a>
                        <span class="icon is-small"><i class="fas fa-chalkboard-teacher"></i></span>
                        <span>Second Grade</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <div class="tab-pane is-active">
               <section class="section center">
                    <p class="is-size-3 mt-2 has-text-weight-bold">
                        Please select grade to start
                    </p>
                </section>
            </div>
            <div class="tab-pane" id="pane-1">
               <section class="section">
                    <div class="container">
                        <router-view></router-view>
                    </div>
                </section>
            </div>
            <div class="tab-pane" id="pane-2">
                <section class="section">
                    <div class="container">
                        First Grade
                    </div>
                </section>
            </div>
            <div class="tab-pane" id="pane-3">
                <section class="section">
                    <div class="container">
                        Second Grade
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            showHeader() {
                return this.store.state.showMenuHeader;
            }
        }
    }
</script>