<script>
export default {
	data() {
		return {
			userTheme: "light-theme",
			mounted: false,
		};
	},
	mounted() {
		this.mounted = true
	},
};
</script>

<template>
	<div class="container hero component" id="0">
		<div>
			<Transition name="fade">
				<div v-if="mounted" class="text-content">
					<div class="intro">Hello, I am</div>
					<h2>Romar Desabille</h2>
					<div class="headline">Aspiring Web Developer.</div>
				</div>
			</Transition>
			<button class="resume-btn">
				Resume.pdf
			</button>
		</div>
		<div class="my-img-container">
			<img src="../assets/images/my-image.jpg" alt="my image" class="my-img">
		</div>
	</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: margin-top .4s, opacity .4s linear;
}

.fade-enter-from,
.fade-leave-to{
	margin-top: -80px;
	opacity: 0;
}

.container{
	margin-bottom: 10rem;
}

.my-img{
	width: 300px;
	height: 300px;
	border: 7px solid transparent;
	padding: .4rem;
	border-radius: 50%;
	background:
		linear-gradient(#202023, #202023) padding-box,
		linear-gradient(to right, #48BFE4, #405CE2, #370B9B, #6C09AE, #EA237E) border-box;
}

h2{
	font-size: 4rem;
}

.headline{
	font-size: 2rem;
}

.hero{
	height: 70vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 3rem;
}
.text-content{
	/*
	margin-top: 200px;
	*/
}
.intro{
	font-size: 1.3rem;
}

.resume-btn{
	margin-top: 15px;
	font-size: .9rem;
	font-weight: 500;
	padding: 10px 20px;
}

</style>
