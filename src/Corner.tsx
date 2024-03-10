import React, { useEffect } from 'react'
import { ExtrudeGeometry, Shape } from 'three'
import { useThree } from '@react-three/fiber'

type CornerProps = {
	corner: "topLeft" | "topRight" | "bottomRight" | "bottomLeft"
}

const Corner: React.FC<CornerProps> = ({corner}) => {
	let position: [number, number, number]
	const scale = 1
	const { width, height } = useThree(state => state.viewport)

	useEffect(() => {
		console.log(width, height)

	}, [width])

	const shape = new Shape()
	switch(corner){
		case "topLeft":
			shape.moveTo(0, 0)
			shape.lineTo(0, -scale)
			shape.lineTo(scale, 0)
			shape.lineTo(0, 0)
			position = [-1.8, 3.8, 0]
			break
		case "topRight":
			shape.moveTo(scale, 0)
			shape.lineTo(scale, -scale)
			shape.lineTo(0, 0)
			shape.lineTo(scale, 0)
			position = [3.5, 3.7, 0]
			break
		case "bottomRight":
			shape.moveTo(scale, -scale)
			shape.lineTo(scale, 0)
			shape.lineTo(0, -scale)
			shape.lineTo(scale, -scale)
			position = [3.5, -2.5, 0]
			break
		case "bottomLeft":
			shape.moveTo(0, -scale)
			shape.lineTo(0, 0)
			shape.lineTo(scale, -scale)
			shape.lineTo(0, -scale)
			position = [-4.5, -2.5, 0]
			break
	}

	const extrudeSettings = {
		depth: .0001,
		bevelEnable: false
	}
	const cornerGeometry = new ExtrudeGeometry(shape, extrudeSettings)

	return (
		<mesh position={position}>
			<primitive object={cornerGeometry} />
			<meshStandardMaterial color={"white"} />
		</mesh>
	)
}

export default Corner