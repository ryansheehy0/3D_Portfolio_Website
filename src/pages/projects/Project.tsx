import React from "react"
import GithubIcon from "../../../public/GithubIcon"
import InternetIcon from "../../../public/InternetIcon"

type ProjectProps = {
	title: string,
	imageSrc: string,
	githubLink: string,
	webLink: string
}

const Project: React.FC<ProjectProps> = ({title, imageSrc, _githubLink, _webLink}) => {
	return (
		<div className="w-96">
			{/* Title bar*/}
			<div className="rounded-t-3xl h-12 bg-black text-white text-2xl p-2 text-center">
				{title}
			</div>

			{/* Image*/}
			<div className="rounded-br-3xl border-4 border-t-0 border-black h-52 flex justify-center">
				<img src={imageSrc} width="100%" height="100%" className="rounded-br-3xl"/>
			</div>

			{/* Links*/}
			<div className="bg-black w-full flex rounded-bl-3xl h-[44px]">
				<div className="bg-white w-[88px] h-full flex text-white" >
					<GithubIcon className="text-white bg-black h-full w-full hover:cursor-pointer p-2 pr-1 pt-1 aspect-square rounded-bl-3xl"/>
					<InternetIcon className="text-white bg-black h-full w-full hover:cursor-pointer p-2 pl-1 pt-1 aspect-square rounded-br-3xl"/>
				</div>
				<div className="bg-white rounded-tl-3xl w-[296px] h-full"></div>
			</div>

		</div>
	)
}

export default Project