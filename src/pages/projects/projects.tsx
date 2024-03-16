export type projectType = {
	title: string,
	imageSrc: string,
	githubLink: string,
	webLink: string
}

const projects = [
	{
		title: "RS Cheat Sheets",
		imageSrc: "/projects/cheatsheet.jpeg",
		githubLink: "https://github.com/ryansheehy0/Cheat_Sheets",
		webLink: "https://rscheatsheets.com/"
	},
	{
		title: "Adrift In Space",
		imageSrc: "/projects/adrift_in_space.png",
		githubLink: "https://github.com/ryansheehy0/Adrift_In_Space_2",
		webLink: "https://www.adriftinspace.net/"
	},
	{
		title: "Null Todos",
		imageSrc: "/projects/null_todos.png",
		githubLink: "https://github.com/ryansheehy0/Null_Todos",
		webLink: "https://nulltodos.com/"
	},
	{
		title: "Null Pass Manger CLI",
		imageSrc: "/projects/security.png",
		githubLink: "https://github.com/ryansheehy0/Null_Pass_Manager_CLI",
		webLink: ""
	},
]

export default projects