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

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import React from "react"

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: React.FormEvent){
    event.preventDefault()
    const serviceId = "service_e1l2mww"
    const templateId = "template_b8orzrf"
    const publicKey = "x-2GXMzV_2EEN_Eum"
    try{
      const result = await emailjs.sendForm(serviceId, templateId, form.current as HTMLFormElement, publicKey)
      console.log(result.text)

      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    }catch(error){console.log(error)}
  }

  return (
    <>
      <form ref={form} className="text-white mt-16 px-2 grid grid-cols-2 justify-items-center h-fit gap-4 w-full max-w-[600px]" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value)}}
          type="text"
          required
          placeholder="Your Name"
          name="name"
          className="inline-block focus:outline-none rounded p-2 h-fit bg-black col-span-1 w-full"
        />
        <input
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}}
          type="email"
          required
          placeholder="Your Email"
          name="email"
          className="inline-block focus:outline-none rounded p-2 h-fit bg-black col-span-1 w-full"
        />
        <input
          value={subject}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setSubject(event.target.value)}}
          type="text"
          required
          placeholder="Subject"
          name="subject"
          className="block focus:outline-none rounded p-2 h-fit bg-black col-span-2 w-full"
        />
        <textarea
          value={message}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {setMessage(event.target.value)}}
          placeholder="Message"
          name="message"
          className="block focus:outline-none rounded p-2 bg-black col-span-2 w-full h-36"
        />
        <button type="submit" className="block focus:outline-none rounded p-2 h-fit bg-black col-span-2 w-full">
          Submit
        </button>
      </form>
      <div className="w-full h-fit mt-16 flex items-center justify-center sm:flex-row flex-col">
        <div className="bg-black rounded sm:mr-4 mt-8 relative w-[304px] h-[250px] flex items-center justify-center flex-col">
          <div style={{backgroundImage: `url(/phone_image.jpg)`}} className="bg-cover bg-no-repeat bg-center w-[304px] h-[250px] opacity-40 absolute"></div>
          <p className="w-full text-white text-center text-xl z-10">Phone</p>
          <p className="w-full text-white text-center text-xl z-10">(408) 806-3989</p>
        </div>
        <div className="bg-black rounded sm:ml-4 mt-8 relative w-[304px] h-[250px] flex items-center justify-center flex-col">
          <div style={{backgroundImage: `url(/email_image.jpg)`}} className="bg-cover bg-no-repeat bg-center w-[304px] h-[250px] opacity-40 absolute"></div>
          <p className="w-full text-white text-center text-xl z-10">Email</p>
          <p className="w-full text-white text-center text-xl z-10">ryansheehy0@gmail.com</p>
        </div>
      </div>
    </>
  )
}

export default Contact