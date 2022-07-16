const imgPath = '/src/assets/images/'

const featured = [
	{
		title: 'My Portfolio',
		description: 'My First Portfolio Site',
		used: 'Vue • CSS',
		link: null,
		githubLink: 'https://github.com/romar0001/portfolio',
		thumbnail: `${imgPath}/portfolio/1.png`
	},
	{
		title: 'Capstone Project',
		description: 'Course Recommendation for K-12 Students Using Multiple-Regression Based on Online Entrance Exam',
		used: 'NextJS • MUI • Django Rest API',
		link: null,
		githubLink: 'https://github.com/romar0001/capstone',
		thumbnail: `${imgPath}/capstone/1.png`
	},
	{
		title: 'Anime Site',
		description: 'My 3rd year project. A person can view anime videos using the site.' +
			'The videos are saved in the google drive and the admin will need to add ' +
			'the link though the site.',
		used: 'PHP • MySQL • Javascript • Bootstrap • CSS',
		link: null,
		githubLink: 'https://github.com/romar0001/anime',
		thumbnail: `${imgPath}/anime/1.png`
	}
]

const projects = {
	featured: [...featured],
	all: [
		{
			...featured[0],
			screenshots: [
				`${imgPath}/portfolio/2.png`,
				`${imgPath}/portfolio/3.png`
			],
		},
		{
			...featured[1],
			screenshots: [
				`${imgPath}/capstone/2.png`,
				`${imgPath}/capstone/3.png`,
				`${imgPath}/capstone/4.png`,
				`${imgPath}/capstone/5.png`,
			],
		},
		{
			...featured[2],
			screenshots: [
				`${imgPath}/anime/5.png`,
				`${imgPath}/anime/2.png`,
				`${imgPath}/anime/3.png`,
				`${imgPath}/anime/4.png`,
			],
		}
	]
}

export default projects