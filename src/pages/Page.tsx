import React from "react"
import GithubIcon from "../../public/GithubIcon"

type PageProps = {
	pageTitle: string,
  style?: React.CSSProperties,
  children?: React.ReactNode,
  cornerClicked: "topLeft" | "topRight" | "bottomRight" | "bottomLeft" | "none",
	setCornerClicked: React.Dispatch<React.SetStateAction<"topLeft" | "topRight" | "bottomRight" | "bottomLeft" | "none">>,
  setAnimateTopLeft: React.Dispatch<React.SetStateAction<"none" | "forward" | "backward">>,
  setAnimateTopRight: React.Dispatch<React.SetStateAction<"none" | "forward" | "backward">>,
  setAnimateBottomRight: React.Dispatch<React.SetStateAction<"none" | "forward" | "backward">>,
  setAnimateBottomLeft: React.Dispatch<React.SetStateAction<"none" | "forward" | "backward">>
}

const Page: React.FC<PageProps> = ({pageTitle, style, children, cornerClicked, setCornerClicked, setAnimateTopLeft, setAnimateTopRight, setAnimateBottomRight, setAnimateBottomLeft}) => {
  return (
		<div className="w-screen h-fit bg-white relative text-black transition-opacity ease-in-out" style={style}>

      {/* Back button */}
      <button className="bg-black border-none focus:outline-none absolute top-0 left-0 rounded-none rounded-br-3xl text-white w-36 h-16"
        onClick={() => {
          switch(cornerClicked){
            case "topLeft":
              setAnimateTopLeft("backward")
              break
            case "topRight":
              setAnimateTopRight("backward")
              break
            case "bottomRight":
              setAnimateBottomRight("backward")
              break
            case "bottomLeft":
              setAnimateBottomLeft("backward")
              break
          }
          setCornerClicked("none")
        }}>
        <img className="w-full h-full" src="/backButton.svg" />
      </button>

      {/* Title and page */}
      <div className="h-fit min-h-[calc(100vh-130px)] w-full flex flex-col items-center overflow-y-auto">
        <h1 className="pt-16 pb-4 text-6xl">{pageTitle}</h1>
        {children}
      </div>

      {/*Github and Linked In buttons */}
      <div className="flex justify-center items-center pb-16 pt-4 w-full">
        <a href="https://github.com/ryansheehy0" target="_blank" className="text-black">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/ryansheehy0/" target="_blank">
          <img src="/linked-in.svg"/>
        </a>
      </div>
		</div>
  )
}

export default Page