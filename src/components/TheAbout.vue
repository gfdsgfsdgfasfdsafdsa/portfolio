<script>
export default {
	props:{
		color: '',
	},
};
</script>

<template>
	<div class="container component" id="1">
		<h2>About <span class="line"/></h2>
		<div class="about">
			<div class="info">
				<h3>Background</h3>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries, but also
					the leap into electronic typesetting, remaining essentially unchanged.
					It was popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop publishing
					software like Aldus PageMaker including versions of Lorem Ipsum
				</p>
			</div>
			<div class="technologies">
				<div>
					<div style="color: transparent">Background</div>
				</div>
				<div class="main">
					<h3>Some Technologies I have experience using:</h3>
					<div class="list">
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Javascript</li>
							<li>PHP</li>
							<li>Python</li>
						</ul>
						<ul>
							<li>CodeIgniter</li>
							<li>React</li>
							<li>NextJS</li>
							<li>Django Rest Api</li>
							<li>MySql</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="info" style="margin-top: 5rem">
				<h3>Experience</h3>
				<ul>
					<li>
						Lorem ipsum
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
h2{
	font-size: 2.8rem;
	margin-bottom: 5rem;
	position: relative;
}
h2 .line{
	width: 30px;
	height: 10px;
	background-color: v-bind(color);
	position: absolute;
	top: 55px;
	left: 0;
}

.about .info, .technologies{
	display: flex;
	align-items: start;
}
.about .info h3, .technologies h3{
	font-weight: 500;
	font-size: 1.1rem;
}

.about .info p, .about .info ul, .technologies .main{
	font-size: 1rem;
	margin-left: 50px;
}

.technologies{
	margin-top: 2rem;
	font-size: 1rem;
}

.technologies .list{
	margin-top: 1rem;
	display: flex;
	margin-left: 1.5rem;
}
.technologies .list ul{
	list-style-type: circle;
	margin-right: 2.9rem;
}
.technologies .list ul li{
	list-style-type: circle;
	margin-top: .3rem;
}

img{
	width: 100px;
	height: 100px;
	margin-left: 10px;
}

.container{
	padding-top: 5rem;
	margin-bottom: 15rem;
}


@media screen and (min-width: 1200px) {
	.container {
		width: 1000px;
	}
}
</style>
