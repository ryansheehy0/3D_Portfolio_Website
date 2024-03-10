import React, { useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Text } from "@react-three/drei"

type CornerProps = {
	corner: "topLeft" | "topRight" | "bottomRight" | "bottomLeft"
}

const Corner: React.FC<CornerProps> = ({corner}) => {
	const scale = 2.5
	const { width, height } = useThree(state => state.viewport)
	const [depth, setDepth] = useState(0.001)

	let position: [number, number, number]
	switch(corner){
		case "topLeft":
			position = [-width/2, height/2, 0]
			break
		case "topRight":
			position = [width/2, height/2, 0]
			break
		case "bottomRight":
			position = [width/2, -height/2, 0]
			break
		case "bottomLeft":
			position = [-width/2, -height/2, 0]
			break
	}

	return (
		<>
			<mesh
				position={position}
				rotation={[0, 0, 45 * (Math.PI/180)]}
				onClick={() => {
					setDepth(1.125)
				}}
				onPointerOver={() => document.body.style.cursor = "pointer"}
				onPointerOut={() => document.body.style.cursor = "auto"}
			>
				<boxGeometry args={[scale, scale, depth]}/>
				<meshStandardMaterial color={"white"} />
			</mesh>
			<Text
				position={[-width/2 + 0.8, height/2 - 0.8, 0.1]}
				rotation={[0, 0, 45 * (Math.PI/180)]}
				scale={0.3}
				color={"black"}
			>
				About Me
			</Text>
		</>
	)
}

export default Corner