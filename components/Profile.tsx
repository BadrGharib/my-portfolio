import React, { ReactElement } from 'react'
import Link from 'next/link'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedinIn } from 'react-icons/fa'
import {MdPictureAsPdf} from 'react-icons/md'

function Profile (): ReactElement {
  return (
    <div className="flex flex-wrap flex-row p-2 justify-between ">
      <div className="m-1 p-5 flex-1 w-[100%] lg:w-[80%]">
        <h3 className="my-5">
          <span className="text-3xl font-semibold">Hi👋</span>
          <span className="text-3xl text-blue-800  font-nerkoOne">{'I\'m Badr Gharib'}</span>
        </h3>
        <p className="leading-7 mt-5 font-coolvetica">
          Technical Lead Frontend Developer (React, Redux)with more than 5 years
          of experience as frontend developer and more than 10 years as software
          engineer in general, who can Design and develop quality, secure, easy
          to use and high-performance solutions. Troubleshoot and resolve
          customer issues. Review and provide detailed feedback on peer design
          and source code
        </p>
      </div>
       <div className="flex lg:flex-col justify-center items-center flex-wrap w-[100%] lg:w-[20%]">
          <Link href="https://github.com/BadrGharib" target="_blank" passHref>
            <GoMarkGithub className="h-[40px] w-[40px] rounded-xl m-2 fill-blue-800 animate-pulse" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/badr-gharib/"
            target="_blank"
            passHref
          >
            <FaLinkedinIn className="h-[40px] w-[40px] rounded-xl m-2 fill-blue-800 animate-pulse" />
          </Link>
          <Link href="/doc/Badr Gharib -Technical Lead Frontend React.pdf" target="_blank" passHref>
            <MdPictureAsPdf className="h-[40px] w-[40px] rounded-xl m-2 fill-blue-800 animate-pulse" />
          </Link>
        </div>
    </div>
  )
}

export default Profile
