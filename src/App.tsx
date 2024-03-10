import { Canvas } from "@react-three/fiber"
import Corner from "./Corner"
import { Text } from "@react-three/drei"

function App() {

  return (
    <div className="w-screen h-screen" >
      <Canvas className="bg-black" camera={{fov: 90, near: 0.1, far: 1000, position: [0, 0, 5]}}>
        <ambientLight intensity={1} />
        <directionalLight position={[0,0,10]} color="white" intensity={1000}/>
        <Corner corner="topLeft"/>
        <Corner corner="topRight"/>
        <Corner corner="bottomRight"/>
        <Corner corner="bottomLeft"/>
        <Text position={[0, 0, 0]}>
          Ryan Sheehy
        </Text>
      </Canvas>
    </div>
  )
}

export default App
