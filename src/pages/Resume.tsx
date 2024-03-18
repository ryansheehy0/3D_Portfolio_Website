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