import React, { ReactElement } from 'react'
import ViewOnScroll from './containers/motion.container'
import Title from './controls/Title'
import Link from 'next/link'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdPictureAsPdf } from 'react-icons/md'

function ConatctMe (props: {}): ReactElement {
  return (
    <div className="mt-12">
      <ViewOnScroll>
        <Title>Contact Me</Title>
        <div className="text-[22px]  flex-col justify-start">
          Take A Coffee & Chat With Me
        </div>
        <div className="text-[20px] italic flex-col justify-start  text-blue-800 tracking-widest">
          +201002987545
        </div>
        <div className="text-[20px] italic  flex-col justify-start text-blue-800 tracking-widest">
          dev.badr.gharib@gamil.com
        </div>
        <div className="flex justify-start items-stretch flex-wrap">
          <Link href="https://github.com/BadrGharib" target="_blank" passHref>
            <GoMarkGithub className="h-[30px] w-[30px] rounded-xl m-2 fill-blue-800" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/badr-gharib/"
            target="_blank"
            passHref
          >
            <FaLinkedinIn className="h-[30px] w-[30px] rounded-xl m-2 fill-blue-800" />
          </Link>

          <Link href="/doc/Badr Gharib -Technical Lead Frontend React.pdf" target="_blank" passHref>
            <MdPictureAsPdf className="h-[30px] w-[30px] rounded-xl m-2 fill-blue-800" />
          </Link>
        </div>
      </ViewOnScroll>
    </div>
  )
}

export default ConatctMe
