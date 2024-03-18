import React, {useEffect, useRef, useState} from "react"

const Resume: React.FC = () => {
	const outerDiv = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if(outerDiv.current){
			const width = outerDiv.current?.clientWidth
			const aspectRatio = 8.5/11
			setHeight(width * (1/aspectRatio) + 50)
		}
	}, [])

	return (<>
		<div ref={outerDiv} className="max-w-[800px] w-full" style={{height: height}}>
			<object data="/Ryan Sheehy Resume.pdf" type="application/pdf" width="100%" height="100%">
				<p className="text-center">Your web browser cannot display this PDF.
				Instead you can <a href="/Ryan Sheehy Resume.pdf">click here to
				download the PDF file.</a></p>
			</object>
		</div>
	</>)
}

export default Resume