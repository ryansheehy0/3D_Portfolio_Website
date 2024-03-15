import React from "react"

const Resume: React.FC = () => {
	return (<>
		<div className="max-w-[800px] w-full aspect-[calc(7.8/11)] sm:aspect-[calc(8.1/11)] overflow-hidden">
			<object data="/Ryan Sheehy Resume.pdf" type="application/pdf" width="100%" height="100%">
				<p>Your web browser doesn't have a PDF plugin.
				Instead you can <a href="/Ryan Sheehy Resume.pdf">click here to
				download the PDF file.</a></p>
			</object>
		</div>
	</>)
}

export default Resume