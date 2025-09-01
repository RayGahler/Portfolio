// SectionData.js
// This file exports an array of section objects for use in ProjectSections.vue or similar components.

import snek from './snek.png';
import blackJack from './blackJack.png';
import Slop from './Slop.png';
import Todo from "./Todo.png"

export default [
	{
		title: 'Todo App',
		link: 'https://github.com/RayGahler/Todo-App',
		image: Todo,
		description:
			'I built a Todo list web app using Vue and Tailwind. It has the ability to connect to a sql database and/or to Google Calendar. It can also be used without either one (stored on session storage). Ability to add, edit, delete, update, and sort todo items.'
	},
	{
		title: 'Online Blackjack Game',
		link: 'https://github.com/RayGahler/GamblingWebsite',
		image: blackJack,
		description:
		'I developed an interactive online Blackjack game that allows users to play with each other against a virtual dealer. The game features a user-friendly interface and real-time game logic for an engaging experience.'
	},
	{
		title: 'AI Story creator',
		link: 'https://github.com/RayGahler/Python-Story-Maker',
		image: Slop,
		description:
		'I built a Python script to make make AI stories. It takes in a prompt and uses Amazon Bedrock to generate a story, Amazon Polly to get text to speech, and cv2 to overlay the speech on a video along with background music. It can also post the stories to Instagram, TikTok, and Youtube.'
	},
	
	{
		title: 'Snake Game',
		link: 'https://www.github.com/RayGahler/MySnakeGame',
		image: snek,
		description:
			'Using Pygame, I made snake for a club event. It took about an hour with minimal knowledge of Pygame.'
	},
	
];
