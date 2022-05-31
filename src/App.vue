<script>
/*
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from "vue";

const headers = [
	'Section 1',
	'Section 2',
	'Section 3',
	'Section 4',
]

const currentSection = ref('')

onMounted(() => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if(entry.intersectionRatio > 0){
				currentSection.value = entry.target.getAttribute('id')
			}
		})
	}, {
		rootMargin: '0px 0px -90% 0px',
	})
	document.querySelectorAll('article h2').forEach((section) => {
		console.log(section)
		observer.observe(section)
	})
})
*/
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import TheAbout from './components/TheAbout.vue'
import TheProject from "./components/TheProject.vue";
export default {
	name: 'app',
	data(){
		return {
			theme: 'dark',
		}
	},
	components: {
		TheProject,
		TheHeader,
		TheHero,
		TheAbout
	},
	methods: {
		toggleTheme(){
			if(this.theme === 'dark')
				this.theme = 'light'
			else
				this.theme = 'dark'
		}
	},
}

</script>

<template>
	<div class="app" :class="theme">
		<!--
			<button @click="toggleTheme">{{ theme }}</button>
		-->
		<TheHeader/>
		<main>
			<TheHero/>
			<TheAbout/>
			<TheProject/>
		</main>
	</div>
	<!--
<main>
		<article>
			<h1>Article</h1>
			<section v-for="(header, index) in headers" :key="header">
				<h2 :id="index">{{ header }}</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type
					specimen book. It has survived not only five centuries, but also the leap
					into electronic typesetting, remaining essentially unchanged. It was popularised
					in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
					and more recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type
					specimen book. It has survived not only five centuries, but also the leap
					into electronic typesetting, remaining essentially unchanged. It was popularised
					in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
					and more recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type
					specimen book. It has survived not only five centuries, but also the leap
					into electronic typesetting, remaining essentially unchanged. It was popularised
					in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
					and more recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type
					specimen book. It has survived not only five centuries, but also the leap
					into electronic typesetting, remaining essentially unchanged. It was popularised
					in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
					and more recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.
				</p>
			</section>
		</article>
		<aside>
			<div>
				<a v-for="(header, index) in headers"
				   :key="header"
				   :href="`#${index}`"
				   :class="{active: index == currentSection}"
				>
					{{ header }}
				</a>
			</div>
		</aside>
	</main>
	-->
	<!--
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  -->
</template>

<style>
@import './assets/base.css';
/*
#app{
	color: #2c3e50;
	margin-top: 60px;
	width: 80%;
	margin: 0 auto;
}

main{
	display: flex;
}

article{
	width: 75%;
	margin-bottom: 500px;
}

aside{
	width: 25%;
}

aside > div{
	position: sticky;
	top: 20px;
	padding-left: 2em;
}


aside > div > a{
	display: block;
	color: #2c3e50;
	text-decoration: none;
	border-left: 1px solid #ccc;
	padding-left: 2em;
}


.active{
	font-weight: bold;
	border-color: black;
}
 */
</style>
