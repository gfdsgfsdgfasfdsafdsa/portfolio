<script>
import TheHeader from '../components/TheHeader.vue'
import TheHero from '../components/TheHero.vue'
import TheAbout from '../components/TheAbout.vue'
import TheProject from '../components/TheProject.vue';
import TheContact from '../components/TheContact.vue';
import {ref} from "vue";

//const currentSection = ref('home')
export default {
	name: 'Home',
	data(){
		return {
			theme: 'dark',
			currentSection: '0'
		}
	},
	components: {
		TheHeader,
		TheHero,
		TheAbout,
		TheProject,
		TheContact,
	},
	methods: {
		toggleTheme(){
			if(this.theme === 'dark')
				this.theme = 'light'
			else
				this.theme = 'dark'
		}
	},
	mounted() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if(entry.intersectionRatio > 0){
					this.currentSection = entry.target.getAttribute('id')
				}
			})
		}, {
			rootMargin: '0px 0px -85% 0px',
		})
		const elements = document.getElementsByClassName('component')
		for(let i = 0; i < elements.length; i++){
			observer.observe(elements[i])
		}
	},
}
</script>

<template>
	<div :class="theme">
		<div id="h"/>
		<TheHeader :active-link="currentSection"/>
		<main>
			<TheHero/>
			<TheAbout/>
			<TheProject/>
			<TheContact/>
		</main>
	</div>
</template>

<style>
</style>
