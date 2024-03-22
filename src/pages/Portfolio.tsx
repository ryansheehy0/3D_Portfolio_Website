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
import Project from "./projects/Project"
import projects, {projectType} from "./projects/projects"

const Portfolio: React.FC = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
			{projects.map((project: projectType) => (
				<Project key={project.title} title={project.title} imgSrc={project.imgSrc}  imgLink={project.imgLink} githubLink={project.githubLink}/>
			))}
		</div>
	)
}

export default Portfolio