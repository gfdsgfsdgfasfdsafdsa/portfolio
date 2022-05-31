<script>
export default {
	data(){
		return {
			navMenu: '',
			hamburger: '',
			navOverlay: '',
		}
	},
	methods:{
		mobileMenu(){
			this.navMenu.classList.toggle('active')
			this.hamburger.classList.toggle('active')
			this.navOverlay.classList.toggle('active')
		}
	},
	mounted() {
		this.navMenu = this.$refs.navMenu
		this.hamburger = this.$refs.hamburger
		this.navOverlay = this.$refs.navOverlay
	}
}
</script>

<template>
	<header class="container">
		<nav class="navbar">
			<a href="#" class="nav-logo">Ro.</a>
			<div class="nav-overlay" ref="navOverlay"/>
			<ul class="nav-menu" ref="navMenu">
				<li class="nav-item">
					<a href="#home" class="nav-link active">Home</a>
				</li>
				<li class="nav-item">
					<a href="#about" class="nav-link">About</a>
				</li>
				<li class="nav-item">
					<a href="#p" class="nav-link">Project</a>
				</li>
				<li class="nav-item">
					<a href="#a" class="nav-link">Contact</a>
				</li>
				<li class="nav-item">
					<button class="change-theme-icon-btn" style="display: flex; align-items: center">
						<svg
							class="light-theme-icon"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="30"
							height="30">
							<path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/>
						</svg>
					</button>
				</li>
			</ul>
			<div @click="mobileMenu" class="hamburger" ref="hamburger">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</div>
		</nav>
	</header>
</template>

<style scoped>
header{
	position: sticky;
	top: 0;
}

.change-theme-icon-btn{
	padding: 0;
	background: none;
	display: flex;
	align-items: center;
}

.light-theme-icon{
	margin-top: 10px;
	margin-left: 15px;
	fill: #dce30e;
	transition: fill .3s ease-out;
}

.light-theme-icon:hover{
	fill: #a0a604;
}

.navbar{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--bgDark);
	height: 10vh;
}
.hamburger {
    display: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
}

.nav-menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.nav-item {
	/*
	margin-left: 2.3rem;
	 */
}

.nav-link{
	font-size: 1rem;
	padding: 10px 15px;
	border-radius: 5px;
	transition: background .3s ease-out;
	margin-left: 10px;
}

.nav-link:hover, .nav-link.active{
	color: #181818;
	background: white;
}

.nav-logo {
	font-size: 1.5rem;
	font-weight: 800;
}

@media only screen and (max-width: 768px) {

	.nav-menu, .nav-overlay {
		position: fixed;
		right: -100%;
		top: 4.7rem;
		background-color: var(--bgDark);
		display: inline;
		width: 60%;
		text-align: center;
		transition: 0.3s;
		box-shadow:
			0 10px 27px rgba(0, 0, 0, 0.05);
		height: 90vh;
	}

	.nav-overlay{
		width: 100%;
		opacity: 0;
		right: 0;
	}
	.nav-overlay.active{
		opacity: 0.3;
	}

	.nav-menu.active{
		right: 0;
	}

	.nav-item {
		margin: 15px 0;
	}

	.nav-link:hover, .nav-link.active{
		color: unset;
		background-color: unset;
	}

	.hamburger {
		display: block;
		cursor: pointer;
	}

	.hamburger.active .bar:nth-child(2) {
		opacity: 0;
	}

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
}
</style>
