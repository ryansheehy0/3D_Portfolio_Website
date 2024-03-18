/*
 * This file is part of my 3D Portfolio Website.
 *
 * My 3D Portfolio Website is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * My 3D Portfolio Website is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with my 3D Portfolio Website. If not, see <https://www.gnu.org/licenses/>.
 */

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