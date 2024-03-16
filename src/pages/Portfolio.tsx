import React from "react"
import Project from "./projects/Project"
import projects, {projectType} from "./projects/projects"


const Portfolio: React.FC = () => {

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
			{projects.map((project: projectType) => (
				<Project title={project.title} imageSrc={project.imageSrc} githubLink={project.githubLink} webLink={project.webLink} />
			))}
		</div>
	)
}

export default Portfolio