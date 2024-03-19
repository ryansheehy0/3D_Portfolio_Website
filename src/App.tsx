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
      style={{
        opacity: cornerClicked === "none" ? 0 : 1,
        transitionTimingFunction: cornerClicked === "none" ? "cubic-bezier(0.63, 0.01, 0.97, .23)" : "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: cornerClicked === "none" ? "0.5s" : "0.1s",
        pointerEvents: cornerClicked === "none" ? "none" : "auto"
      }}
      cornerClicked={cornerClicked}
      setCornerClicked={setCornerClicked}
      setAnimateTopLeft={setAnimateTopLeft}
      setAnimateTopRight={setAnimateTopRight}
      setAnimateBottomRight={setAnimateBottomRight}
      setAnimateBottomLeft={setAnimateBottomLeft}
    >
      {clickedCorner(cornerClicked).pageComponent}
    </Page>
    <div className="w-full h-full absolute top-0 left-0" style={{display: cornerClicked === "none" ? "initial" : "none"}}>
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
