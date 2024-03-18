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

import React from "react"

const AboutMe: React.FC = () => {
	return (<>
    <div className="text-lg flex flex-col items-center w-4/5 max-w-[800px]">
      <p className="indent-5 my-4">
        I am a Software Engineer based in Santa Clara. My passion for coding is the driving force behind my satisfaction in crafting elegant solutions to complex problems. Witnessing lines of code come to life fuels my pursuit of knowledge and mastery over programming.
      </p>
      <p className="indent-5 my-4">
        Over time, I have developed a deep appreciation for Graphical User Interface (GUI) development. Designing intuitive and visually appealing user interfaces has become one of my strong suits. I take joy in seamlessly integrating complex features into simple and intuitive layouts.
      </p>
      <p className="indent-5 my-4">
        JavaScript programming has captured my attention with its powerful capabilities and numerous exceptional features. Leaning various frameworks and libraries in depth is an engaging experience, allowing me to discern which one best suits my needs. With frameworks like React, NodeJS, Express, Tailwind, and many more, I can create responsive and interactive applications.
      </p>
      <p className="indent-5 my-4">
        Full-stack development is where I excel. Proficient in both front-end and back-end technologies, I orchestrate the entire development process. From crafting exceptional user interfaces to architecting robust server-side code, I enjoy the challenge of creating useful and reliable web applications.
      </p>
      <p className="indent-5 my-4">
        When I'm not coding, I enjoy working on my projects, watching YouTube, running, and playing video games with my friends. I am a driven individual with a lifelong goal of learning as much as possible about all my passions, especially coding!
      </p>
    </div>

    <img src="/profile_picture.png" className="my-4 w-40 aspect-square m-0 p-0"/>
	</>)
}

export default AboutMe