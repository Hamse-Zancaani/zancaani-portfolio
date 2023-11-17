import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Dental Managment System',
		url: 'google-health-Managment',
		category: 'Web Application',
		img: '/images/dental/dental3.png',
		ProjectHeader: {
			title: 'Dental Managment System',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: '',
				img: '/images/dental/2.png',
			},
			
		],
		ProjectInfo: {
			
			CompanyInfo: [
				
				
				
			],
			
			
			
			
			ProjectDetailsHeading: 'Project Discription',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'This is  MERN stack dental management system  a software application I designed specifically for dental practices, I build using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. This stack combines a powerful set of technologies for developing robust and efficient web applications.The dental management system aims to streamline various administrative and clinical processes within a dental practice to enhance efficiency and improve patient care',
				},
				
				
			],
			SocialSharingHeading: 'Share This',
			
		},
	},
	{
		id: 2,
		title: 'SomTek Solutions Agency',
		url: 'https://somtek-solutions.vercel.app/',
		category: 'Web Application',
		img: '/images/dental/somtek.png',
		ProjectHeader: {
			title: 'SomTek Solutions Digital Agency',
			publishDate: 'Jul 26, 2021',
			tags: 'Mobile Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'SomTek Solutions Digital Agency',
				img: '/images/dental/somtek.png',
			},
			
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				
				
				
			],
			ObjectivesHeading: 'Objective',
			
			
			ProjectDetailsHeading: 'Project Discription',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'SomTek Solution landing page is a visually appealing, focused, and persuasive web page that aims to attract and convert visitors. It combines engaging visuals, persuasive copy, clear CTAs, and optimized performance to create a compelling user experience and drive desired actions.',
				},
				
				{
					id: uuidv4(),
					details:
						'React landing pages are designed to be visually appealing and responsive across different devices and screen sizes, ensuring a seamless user experience.',
				},
				
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 3,
		title: 'Xasuus-Reeb Application', 
		url: 'Xasuus-Reeb Application',
		category: 'Web Application',
		img: '/images/dental/5.png',
		ProjectHeader: {
			title: 'Xasuus-Reeb Application',
			publishDate: 'Jul 26, 2021',
			tags: 'full mern stack',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Xasuus-Reeb Application',
				img: '/images/dental/5.png',
			},
			
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				
				
			],
			ObjectivesHeading: 'Objective',
			
				
			
			ProjectDetailsHeading: 'Project Discription',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Xasuus-Reeb is a social media memories web app built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) would allow users to capture and share their special moments and memories with friends and family',
				},
				{
					id: uuidv4(),
					details:
						' social media memories web app built using the MERN stack provides users with a platform to capture, share, and engage with their special moments. It combines user authentication, media upload and organization, social interactions, privacy controls, search and discovery features, and personalized timelines to create a rich and interactive user experience.',
				},
			
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 4,
		title: 'Portfolio Website',
		url: 'Website Portfolio',
		category: 'web Application',
		img: '/images/dental/1.png',
		ProjectHeader: {
			title: 'Portfolio Website',
			publishDate: 'Jul 26, 2021',
			tags: 'Web & Cloud',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Portfolio Website',
				img: '/images/dental/1.png',
			},
			
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				
			],
			ObjectivesHeading: 'Objective',
			
			
			ProjectDetailsHeading: 'Project Discription',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'My Portfolio Website is a sleek and professional web application that showcases your skills, experience, and projects to potential clients or employers. .',
				},
				{
					id: uuidv4(),
					details:
						'Heres a brief summary of the key features and elements that can be included in your portfolio website:',
				},
				{
					id: uuidv4(),
					details:
						'Home/Introduction: The homepage serves as an introduction to your portfolio. It can include a brief bio, a professional profile picture, and a captivating tagline that highlights your unique selling points.',
				},
				{
					id: uuidv4(),
					details:
						'About Me: A dedicated section that provide more detailed information about my background, skills, education, and professional experience. ',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 5,
		title: 'Shaqo-Raadiye Application',
		url: 'wetalk-social-app',
		category: 'Mobile Application',
		img: '/images/dental/3.png',
		ProjectHeader: {
			title: 'Shaqo-Raadiye Application',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Shaqo-Raadiye Application',
				img: '/images/dental/3.png',
			},
			
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				
			],
			ObjectivesHeading: 'Objective',
			
			ProjectDetailsHeading: 'Project Discription',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'The  shaqo-raadiye is a web app that provides a user-friendly interface where job seekers can create profiles, upload their resumes, and input their skills, qualifications, and job preferences. It allows users to search for jobs using various filters such as location, industry, job title, and experience level. The web app employs advanced algorithms to match job seekers with relevant job postings, ensuring that they receive tailored recommendations.',
				},
				{
					id: uuidv4(),
					details:
						'With a vast database of job listings sourced from multiple channels, including company websites, job boards, and recruitment agencies, the Job Finder Web App provides job seekers with a comprehensive collection of available positions. Users can browse through detailed job descriptions, requirements, and application instructions, making it easier to find suitable opportunities.',
				},
				{
					id: uuidv4(),
					details:
						'The web app often includes additional features to enhance the job search process. These may include resume building tools, interview preparation resources, and career advice articles. Such features assist job seekers in presenting themselves effectively to potential employers and improving their chances of success.',
				},
				
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/realstoman',
			// 	},
			// ],
		},
	},
	
];
