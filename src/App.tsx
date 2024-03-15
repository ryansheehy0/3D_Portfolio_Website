import { Canvas } from "@react-three/fiber"
import Corner from "./Corner"
import { Text } from "@react-three/drei"
import Page from "./pages/Page"
import { useState } from "react"
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"

function clickedCorner(cornerClicked: "none" | "topLeft" | "topRight" | "bottomRight" | "bottomLeft"){
  switch(cornerClicked){
    case "none":
      return {pageTitle: "", pageComponent: null}
    case "topLeft":
      return {pageTitle: "About Me", pageComponent: <AboutMe />}
    case "topRight":
      return {pageTitle: "Portfolio", pageComponent: <Portfolio />}
    case "bottomRight":
      return {pageTitle: "Resume", pageComponent: <Resume />}
    case "bottomLeft":
      return {pageTitle: "Contact", pageComponent: <Contact />}
  }
}

function App() {
  const [cornerClicked, setCornerClicked] = useState<"none" | "topLeft" | "topRight" | "bottomRight" | "bottomLeft">("none")

  // State to animate all the corners
  const [animateTopLeft, setAnimateTopLeft] = useState<"forward" | "backward" | "none">("none")
  const [animateTopRight, setAnimateTopRight] = useState<"forward" | "backward" | "none">("none")
  const [animateBottomRight, setAnimateBottomRight] = useState<"forward" | "backward" | "none">("none")
  const [animateBottomLeft, setAnimateBottomLeft] = useState<"forward" | "backward" | "none">("none")

  return (<>
    <Page
      pageTitle={clickedCorner(cornerClicked).pageTitle}
      style={{opacity: cornerClicked === "none" ? 0.7647 : 1, display: cornerClicked === "none" ? "none" : "block"}}
      cornerClicked={cornerClicked}
      setCornerClicked={setCornerClicked}
      setAnimateTopLeft={setAnimateTopLeft}
      setAnimateTopRight={setAnimateTopRight}
      setAnimateBottomRight={setAnimateBottomRight}
      setAnimateBottomLeft={setAnimateBottomLeft}
    >
      {clickedCorner(cornerClicked).pageComponent}
    </Page>
    <div className="w-screen h-screen absolute top-0 left-0" style={{display: cornerClicked === "none" ? "initial" : "none"}}>
      <Canvas className="bg-black" camera={{fov: 90, near: 0.1, far: 1000, position: [0, 0, 5]}}>
        <ambientLight intensity={1.53} />
        <Corner corner="topLeft" setCornerClicked={setCornerClicked} setAnimationDirection={setAnimateTopLeft} animationDirection={animateTopLeft}/>
        <Corner corner="topRight" setCornerClicked={setCornerClicked} setAnimationDirection={setAnimateTopRight} animationDirection={animateTopRight}/>
        <Corner corner="bottomRight" setCornerClicked={setCornerClicked} setAnimationDirection={setAnimateBottomRight} animationDirection={animateBottomRight}/>
        <Corner corner="bottomLeft" setCornerClicked={setCornerClicked} setAnimationDirection={setAnimateBottomLeft} animationDirection={animateBottomLeft}/>
        <Text position={[0, 0, 0]}>{"  "}Ryan{"\n"}Sheehy</Text>
      </Canvas>
    </div>
  </>)
}

export default App
