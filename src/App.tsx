import { Canvas } from "@react-three/fiber"
import Corner from "./Corner"
import { Text } from "@react-three/drei"
import Page from "./pages/Page"

function App() {

  return (
    <div className="w-screen h-screen" >
      <Page pageTitle="Back" className="opacity-100"/>
    {/*
      <Canvas className="bg-black" camera={{fov: 90, near: 0.1, far: 1000, position: [0, 0, 5]}}>
        <ambientLight intensity={1.53} />
        <Corner corner="topLeft" />
        <Corner corner="topRight" />
        <Corner corner="bottomRight" />
        <Corner corner="bottomLeft" />
        <Text position={[0, 0, 0]}>
          Ryan Sheehy
        </Text>
      </Canvas>
      */}
    </div>
  )
}

export default App
