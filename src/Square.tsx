import React from "react"
import { useThree } from '@react-three/fiber'

const Square: React.FC = () => {
	const { width, height } = useThree(state => state.viewport)
	const scale = 2.5
	const maxDepth = -(width/height) * scale
	// [(-width/2) + (scale/4), (height/2) + (-scale/4), maxDepth/2]
	const xYDistanceToCenterOfCorner = (scale/2)/(Math.cos(45 * (Math.PI/180)))

	return (
		<mesh position={[(-width/2) + (xYDistanceToCenterOfCorner/2), (height/2) + (-xYDistanceToCenterOfCorner/2), maxDepth/2]}>
			<boxGeometry args={[0.1, 0.1, 0.1]} />
			<meshStandardMaterial color={"red"}/>
		</mesh>
	)
}

export default Square