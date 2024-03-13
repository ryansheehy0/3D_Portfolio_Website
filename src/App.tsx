import { Canvas } from "@react-three/fiber"
import Corner from "./Corner"
import { Text } from "@react-three/drei"
import Page from "./pages/Page"
import { useState } from "react"

function App() {
  const [cornerClicked, setCornerClicked] = useState<"none" | "topLeft" | "topRight" | "bottomRight" | "bottomLeft">("none")
  const [animationDirection, setAnimationDirection] = useState<"forward" | "backward" | "none">("none")

  return (<>
    <Page
      pageTitle={"Test"}
      style={{opacity: cornerClicked === "none" ? 0.7647 : 1}}
      setCornerClicked={setCornerClicked}
    />
    <div className="w-screen h-screen absolute top-0 left-0" style={{display: cornerClicked === "none" ? "auto" : "none"}}>
      <Canvas className="bg-black" camera={{fov: 90, near: 0.1, far: 1000, position: [0, 0, 5]}}>
        <ambientLight intensity={1.53} />
        <Corner corner="topLeft" setCornerClicked={setCornerClicked}/>
        <Corner corner="topRight" setCornerClicked={setCornerClicked}/>
        <Corner corner="bottomRight" setCornerClicked={setCornerClicked}/>
        <Corner corner="bottomLeft" setCornerClicked={setCornerClicked}/>
        <Text position={[0, 0, 0]}>
          Ryan Sheehy
        </Text>
      </Canvas>
    </div>
  </>)
}

export default App
