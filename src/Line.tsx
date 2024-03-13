import React from "react"
import { useThree } from '@react-three/fiber'
import { CubicBezierLine } from "@react-three/drei"

const Line: React.FC = () => {
	const { width, height } = useThree(state => state.viewport)
	const scale = 2.5
	const maxDepth = -(width/height) * scale
	const xYDistanceToCenterOfCorner = (scale/2)/(Math.cos(45 * (Math.PI/180)))


	return (
		<CubicBezierLine
			start={[0,0,5]}
			end={[(-width/2) + (xYDistanceToCenterOfCorner/2), (height/2) + (-xYDistanceToCenterOfCorner/2), maxDepth/2]}
			midA={[-.2, -.2, -1]}
			midB={[-0.5, -0.5, maxDepth/2 - 1.3]}
			color="green"
			lineWidth={10}
			dashed={false}
		/>
	)
}

export default Line