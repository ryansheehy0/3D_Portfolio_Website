import { Canvas } from "@react-three/fiber"
import Corner from "./Corner"
import Circle from "./Circle"

function App() {

  return (
    <div className="w-screen h-screen" >
      <Canvas className="bg-black" camera={{fov: 90, near: 0.1, far: 1000, position: [0, 0, 5]}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0,0,2]} />
        <Corner corner="topLeft"/>
        {/*
        <Corner corner="topRight"/>
        <Corner corner="bottomRight"/>
        <Corner corner="bottomLeft"/>
  */}
        <Circle />
      </Canvas>
    </div>
  )
}

export default App
