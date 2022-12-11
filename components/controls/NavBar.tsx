import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement, useState } from 'react'
export interface NavItem {
  title: string
  href: string
}

/**
 * logo it's website logo
 *
 * @param {{logo:string,title?:string,items:NavItem[]}} props
 * @returns
 */

function NavBar ({
  logo,
  title,
  items
}: {
  logo: string
  title?: string
  items: NavItem[]
}): ReactElement {
  const [showMenu, setShowMenu] = useState(false)
  const toggelNav = (): void => {
    setShowMenu((previousValue) => !previousValue)
  }
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            className="mr-3 sm:h-14 sm:w-14 rounded-full w-9 h-9"
            alt="Badr Gharib"
            width={50}
            height={50}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white tracking-widest first-letter:text-blue-800 first-letter:text-[28px] first-letter:font-bold">
          {/* <Image
              src="/imgs/badr-logo2.png"
              className="ml-3 h-full"
              alt="Badr Gharib"
              width={50}
              height={50}
            /> */}
          {title}
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggelNav}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${!showMenu && 'hidden'} w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            {items.map((item, indx) => {
              return (
                <li key={indx}>
                  <Link
                    onClick={toggelNav}
                    href={item.href}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
