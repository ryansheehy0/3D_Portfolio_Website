import { Canvas } from "@react-three/fiber"
import Corner from "./Corner"
import { Text } from "@react-three/drei"
import Circle from "./Circle"
import { useState } from "react"
import { Vector3 } from "three"

function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5])

  return (
    <div className="w-screen h-screen" >
      <Canvas className="bg-black" camera={{fov: 90, near: 0.1, far: 1000, position: new Vector3().fromArray(cameraPosition)}}>
        <ambientLight intensity={1} />
        <directionalLight position={[0,0,10]} color="white" intensity={1}/>
        <Corner corner="topLeft" setCameraPosition={setCameraPosition}/>
        <Corner corner="topRight" setCameraPosition={setCameraPosition}/>
        <Corner corner="bottomRight" setCameraPosition={setCameraPosition}/>
        <Corner corner="bottomLeft" setCameraPosition={setCameraPosition}/>
        <Text position={[0, 0, 0]}>
          Ryan Sheehy
        </Text>
        <Circle />
      </Canvas>
    </div>
  )
}

export default App
