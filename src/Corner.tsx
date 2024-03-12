import React, { useState } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { CubicBezierCurve3, Vector3 } from 'three'
import { Text } from "@react-three/drei"

type CornerProps = {
	corner: "topLeft" | "topRight" | "bottomRight" | "bottomLeft"
}

const Corner: React.FC<CornerProps> = ({corner}) => {
	const { width, height } = useThree(state => state.viewport)
	const scale = 2.5
	const maxDepth = -(width/height) * scale
	const xYDistanceToCenterOfCorner = (scale/2)/(Math.cos(45 * (Math.PI/180)))
	const [depth, setDepth] = useState(0.001)
	const [clicked, setClicked] = useState(false)

	const endPoint = new Vector3((-width/2) + (xYDistanceToCenterOfCorner/2), (height/2) + (-xYDistanceToCenterOfCorner/2), maxDepth/2)

	const cameraCurve = new CubicBezierCurve3(
		new Vector3(0, 0, 5),
		new Vector3(0, 0, 0),
		new Vector3(0, 0, maxDepth/2),
		endPoint
	)

	const numberOfFrames = 100
	let t = 0
	useFrame((state) => {
		if(!clicked) return null
			console.log(t)
    const position = cameraCurve.getPoint(t)
		state.camera.lookAt(position)
		state.camera.position.lerp(position, .06)
		state.camera.updateProjectionMatrix()
		t+=1/numberOfFrames
		//if(t>=.935) t=.935
		if(t>=1) t=1
	})

	let position: [number, number, number]
	let textPosition: [number, number, number]
	let textRotation: [number, number, number]
	let text: string
	//let cameraCurve: CubicBezierCurve3
	switch(corner){
		case "topLeft":
			position = [-width/2, height/2, 0]
			textPosition = [-width/2 + 0.8, height/2 - 0.8, 0.1]
			textRotation = [0, 0, 45 * (Math.PI/180)]
			text = "About Me"
			break
		case "topRight":
			position = [width/2, height/2, 0]
			textPosition = [width/2 - 0.8, height/2 - 0.8, 0.1]
			textRotation = [0, 0, -45 * (Math.PI/180)]
			text = "Portfolio"
			break
		case "bottomRight":
			position = [width/2, -height/2, 0]
			textPosition = [width/2 - 0.8, -height/2 + 0.8, 0.1]
			textRotation = [0, 0, -315 * (Math.PI/180)]
			text = "Resume"
			break
		case "bottomLeft":
			position = [-width/2, -height/2, 0]
			textPosition = [-width/2 + 0.8, -height/2 + 0.8, 0.1]
			textRotation = [0, 0, -45 * (Math.PI/180)]
			text = "Contact"
			break
	}

	return (
		<>
			<mesh
				position={[position[0], position[1], depth/2]}
				rotation={[0, 0, 45 * (Math.PI/180)]}
				onClick={() => {setDepth(maxDepth); setClicked(true);}}
				onPointerOver={() => document.body.style.cursor = "pointer"}
				onPointerOut={() => document.body.style.cursor = "auto"}
			>
				<boxGeometry args={[scale, scale, depth]}/>
				<meshStandardMaterial color={"white"} />
			</mesh>
			<Text
				position={textPosition}
				rotation={textRotation}
				scale={0.3}
				color={"black"}
			>
				{text}
			</Text>
		</>
	)
}

export default Corner