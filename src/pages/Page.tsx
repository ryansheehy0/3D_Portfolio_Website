import React from "react"
import { twMerge } from "tailwind-merge"

type PageProps = {
	pageTitle: string,
  style?: React.CSSProperties,
  children?: React.ReactNode,
	setCornerClicked: React.Dispatch<React.SetStateAction<"topLeft" | "topRight" | "bottomRight" | "bottomLeft" | "none">>
}

const Page: React.FC<PageProps> = ({pageTitle, style, children, setCornerClicked}) => {
  return (
		<div className={twMerge("w-screen h-screen bg-white flex flex-col items-center text-black transition-opacity")} style={style}>

      {/* Back button */}
      <button className="bg-black border-none focus:outline-none absolute top-0 left-0 rounded-none rounded-br-3xl text-white w-36 h-16" onClick={() => {console.log("test"); setCornerClicked("none")}}>
        <img className="w-full h-full" src="/backButton.svg" />
      </button>

      {/* Title and page */}
      <div className="h-fit min-h-[calc(100vh-178px)] flex flex-col items-center">
        <h1 className="pt-16 pb-16 text-6xl">{pageTitle}</h1>
        {children}
      </div>

      {/*Github and Linked In buttons */}
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