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

import React from "react"
import GithubIcon from "../../assets/GithubIcon"

type ProjectProps = {
	title: string,
	imgSrc: string,
	imgLink: string,
	githubLink: string
}

const Project: React.FC<ProjectProps> = ({title, imgSrc, imgLink, githubLink}) => {
	return (
		<div className="w-96">
			{/* Title bar*/}
			<div className="rounded-t-3xl h-12 bg-black text-white text-2xl p-2 text-center">
				{title}
			</div>

			{/* Image*/}
			<a href={imgLink} target="_blank" className="rounded-br-3xl border-4 border-t-0 border-black h-52 flex justify-center overflow-hidden">
				<img src={imgSrc} width="100%" height="100%" className=""/>
			</a>

			{/* Links*/}
			<div className="bg-black w-full flex rounded-bl-3xl h-[44px]">
				<div className={"bg-white h-full flex text-white w-[48px]"}>
					<a href={githubLink} target="_blank" className="text-black hover:text-black w-full h-full">
						<GithubIcon className={"text-white bg-black h-full w-full hover:cursor-pointer p-2 pt-1 aspect-square rounded-bl-3xl rounded-br-3xl pr-2"}/>
					</a>
				</div>
				<div className={"bg-white rounded-tl-3xl h-full w-[336px]"}></div>
			</div>

		</div>
	)
}

export default Project