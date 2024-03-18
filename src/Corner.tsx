/*
 * This file is part of my 3D Portfolio Website.
 *
 * My 3D Portfolio Website is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * My 3D Portfolio Website is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with my 3D Portfolio Website. If not, see <https://www.gnu.org/licenses/>.
 */

import React, { useState } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { CubicBezierCurve3, Vector3 } from 'three'
import { Text } from "@react-three/drei"

type CornerProps = {
	corner: "topLeft" | "topRight" | "bottomRight" | "bottomLeft",
	setCornerClicked: React.Dispatch<React.SetStateAction<"topLeft" | "topRight" | "bottomRight" | "bottomLeft" | "none">>,
	animationDirection: "none" | "forward" | "backward",
	setAnimationDirection: React.Dispatch<React.SetStateAction<"none" | "forward" | "backward">>
}

const Corner: React.FC<CornerProps> = ({corner, setCornerClicked, animationDirection, setAnimationDirection}) => {
	const { viewport } = useThree()
	const { width, height} = viewport
	const { setSize, size } = useThree()
	const scale = 2.5
	const maxDepth = -(width/height) * scale
	const xYDistanceToCenterOfCorner = (scale/2)/(Math.cos(45 * (Math.PI/180)))
	const noDepth = 0.001
	const [depth, setDepth] = useState(noDepth)

	let position: [number, number, number]
	let textPosition: [number, number, number]
	let textRotation: [number, number, number]
	let text: string
	let endPoint: Vector3
	switch(corner){
		case "topLeft":
			position = [-width/2, height/2, 0]
			textPosition = [-width/2 + 0.8, height/2 - 0.8, 0.1]
			textRotation = [0, 0, 45 * (Math.PI/180)]
			text = "About Me"
			endPoint = new Vector3((-width/2) + (xYDistanceToCenterOfCorner/2), (height/2) - (xYDistanceToCenterOfCorner/2), maxDepth/2)
			break
		case "topRight":
			position = [width/2, height/2, 0]
			textPosition = [width/2 - 0.8, height/2 - 0.8, 0.1]
			textRotation = [0, 0, -45 * (Math.PI/180)]
			text = "Portfolio"
			endPoint = new Vector3((width/2) - (xYDistanceToCenterOfCorner/2), (height/2) - (xYDistanceToCenterOfCorner/2), maxDepth/2)
			break
		case "bottomRight":
			position = [width/2, -height/2, 0]
			textPosition = [width/2 - 0.8, -height/2 + 0.8, 0.1]
			textRotation = [0, 0, -315 * (Math.PI/180)]
			text = "Resume"
			endPoint = new Vector3((width/2) - (xYDistanceToCenterOfCorner/2), (-height/2) + (xYDistanceToCenterOfCorner/2), maxDepth/2)
			break
		case "bottomLeft":
			position = [-width/2, -height/2, 0]
			textPosition = [-width/2 + 0.8, -height/2 + 0.8, 0.1]
			textRotation = [0, 0, -45 * (Math.PI/180)]
			text = "Contact"
			endPoint = new Vector3((-width/2) + (xYDistanceToCenterOfCorner/2), (-height/2) + (xYDistanceToCenterOfCorner/2), maxDepth/2)
			break
	}

	const cameraCurve = new CubicBezierCurve3(
		new Vector3(0, 0, 5),
		new Vector3(0, 0, 0),
		new Vector3(0, 0, maxDepth/2 + 0.2),
		endPoint
	)

	const numberOfFrames = 56
	const oneFrame = 1 / numberOfFrames
	const [t, setT] = useState(0)
	useFrame((state) => {
		switch(animationDirection){
			case "none": return null
			case "forward":
				setT((t) => t + oneFrame)
				if(t >= 1 + 3 * oneFrame){
					setT(1)
					setCornerClicked(corner)
					setAnimationDirection("none")
				}
				break
			case "backward":
				setT((t) => t - oneFrame)
				if(t <= 0 - oneFrame){
					setT(0)
					setCornerClicked("none")
					setAnimationDirection("none")
					setDepth(noDepth)
				}
				break
		}
    const position = cameraCurve.getPoint(t)
		const slightlyAheadPosition = cameraCurve.getPoint(t + .1)
		if(t <= 0){
			state.camera.position.set(0, 0, 5)
			state.camera.lookAt(0, 0, 0)
			// Make sure the corners align if the page width changes
			setSize(size.width, size.height)
		}else{
			state.camera.position.lerp(position, .35)
			state.camera.lookAt(slightlyAheadPosition)
		}
	})

	return (
		<>
			<mesh
				position={[position[0], position[1], depth/2]}
				rotation={[0, 0, 45 * (Math.PI/180)]}
				onClick={() => {setDepth(maxDepth); setAnimationDirection("forward")}}
				onPointerOver={() => document.body.style.cursor = "pointer"}
				onPointerOut={() => document.body.style.cursor = "auto"}
			>
				<boxGeometry args={[scale, scale, depth]}/>
				<meshStandardMaterial color="white"/>
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