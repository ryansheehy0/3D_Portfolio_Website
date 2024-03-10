import React, { useState } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { CubicBezierCurve3, Vector3 } from 'three'
import { Text } from "@react-three/drei"

type CornerProps = {
	corner: "topLeft" | "topRight" | "bottomRight" | "bottomLeft",
	setCameraPosition: React.Dispatch<React.SetStateAction<number[]>>
}

const Corner: React.FC<CornerProps> = ({corner, setCameraPosition}) => {
	const scale = 2.5
	const maxDepth = (1080/1920) * scale
	const xYDistanceToCenterOfCorner = (scale/2)/(Math.cos(45 * (Math.PI/180)))
	const { width, height } = useThree(state => state.viewport)
	const [depth, setDepth] = useState(0.001)
	
	useFrame((_state, delta) => {
		
	})

	let position: [number, number, number]
	let textPosition: [number, number, number]
	let textRotation: [number, number, number]
	let text: string
	let cameraCurve: CubicBezierCurve3
	switch(corner){
		case "topLeft":
			position = [-width/2, height/2, 0]
			textPosition = [-width/2 + 0.8, height/2 - 0.8, 0.1]
			textRotation = [0, 0, 45 * (Math.PI/180)]
			text = "About Me"
			cameraCurve = new CubicBezierCurve3(
				new Vector3((-width/2) + (xYDistanceToCenterOfCorner/2), (height/2) + (-xYDistanceToCenterOfCorner/2), maxDepth/2),
				new Vector3(0, 0, 0),
				new Vector3(0, 0, 5)
			)
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
				position={[position[0], position[1], -depth/2]}
				rotation={[0, 0, 45 * (Math.PI/180)]}
				onClick={() => {setDepth(maxDepth)}}
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