
const Circle: React.FC = () => {

	return (
		<mesh>
			<circleGeometry args={[0.02, 0.02, 0.02]}/>
			<meshStandardMaterial color={"blue"}/>
		</mesh>
	)
}

export default Circle