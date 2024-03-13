import React from "react"
import { twMerge } from "tailwind-merge"

type PageProps = {
	pageTitle: string,
	className?: string
}

const Page: React.FC<PageProps> = ({pageTitle, className}) => {
  return (
		<div className={twMerge("w-screen h-screen bg-white flex flex-col items-center text-black", className)}>
			<h1 className="pt-4 pb-16 text-6xl">{pageTitle}</h1>
			<button className="bg-black border-none focus:outline-none absolute top-0 left-0 rounded-none rounded-br-3xl text-white w-36 h-16">
				<img className="w-full h-full" src="/backButton.svg" />
			</button>
      <div className="flex row-span-1 items-center py-16">
        <a href="https://github.com/ryansheehy0" target="_blank">
          <img src="/github.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/ryansheehy0/" target="_blank">
          <img src="/linked-in.svg"/>
        </a>
      </div>
		</div>
  )
}

export default Page