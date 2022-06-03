<script setup>
import { ref, onMounted } from "vue";
import {useThemeStore} from "../stores/theme";

const isComponentMounted = ref(false)
const themeStore = useThemeStore()
let color = '#000000'
onMounted(() => {
	isComponentMounted.value = true
	color = themeStore.color
})

</script>
<template>
	<Transition name="fade">
		<div class="container" v-if="isComponentMounted">
			<header>
				<nav>
					<a href="/#2" class="btn-back">Back</a>
					<h1>Projects <span class="line"/></h1>
				</nav>
			</header>
		</div>
	</Transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity .2s linear;
}

header{
	padding-top: 2rem;
}

h1{
	font-size: 2.8rem;
	margin-bottom: 5rem;
	position: relative;
}
h1 .line{
	width: 30px;
	height: 10px;
	background-color: v-bind(color);
	position: absolute;
	top: 55px;
	left: 0;
}

.btn-back{
	color: var(--accentColor);
	font-size: 1.5rem;
	border-bottom: 2px solid var(--accentColor);
}
</style>
