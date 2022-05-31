<script setup>
</script>

<template>
	<div class="container">
		<h2>Projects <span class="line"/></h2>
		<p>test</p>
	</div>
</template>

<style scoped>
h2{
	margin-bottom: 5rem;
	position: relative;
}
h2 .line{
	width: 30px;
	height: 10px;
	background-color: #EDEDEE;
	position: absolute;
	top: 55px;
	left: 0;
}

.container{
	margin-top: 5rem;
}

@media screen and (min-width: 1200px) {
	.container {
		width: 1000px;
	}
}
</style>
