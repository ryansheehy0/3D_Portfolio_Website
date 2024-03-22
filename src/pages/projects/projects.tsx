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
	imgSrc: string,
	imgLink: string,
	githubLink: string
}

const projects = [
	{
		title: "RS Cheat Sheets",
		imgSrc: "/projects/cheatsheet.jpeg",
		imgLink: "https://rscheatsheets.com/",
		githubLink: "https://github.com/ryansheehy0/Cheat_Sheets",
	},
	{
		title: "Adrift In Space",
		imgSrc: "/projects/adrift_in_space.png",
		imgLink: "https://www.adriftinspace.net/",
		githubLink: "https://github.com/ryansheehy0/Adrift_In_Space_2"
	},
	{
		title: "Null Todos",
		imgSrc: "/projects/null_todos.png",
		imgLink: "https://nulltodos.com/",
		githubLink: "https://github.com/ryansheehy0/Null_Todos"
	},
	{
		title: "Null Pass Manger CLI",
		imgSrc: "/projects/security.png",
		imgLink: "https://github.com/ryansheehy0/Null_Pass_Manager_CLI",
		githubLink: "https://github.com/ryansheehy0/Null_Pass_Manager_CLI"
	},
]

export default projects