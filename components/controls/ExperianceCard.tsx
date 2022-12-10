import Image from 'next/image'
import React, { ReactElement } from 'react'
import Link from 'next/link'
import { CardExperianceInfo } from '../../utils/types'

/**
 *
 * @param {{companyTitle:string,companyLogo:string,roleTitle:string,roleInfo:string[]}}
 * @returns
 */
function ExperianceCard ({
  companyTitle,
  companyLogo,
  roleTitle,
  roleInfo,
  color,
  date,
  companyLink
}: CardExperianceInfo): ReactElement {
  return (
    <div className="flex flex-col w-full rounded-xl h-[100%] shadow shadow-gray-400">
      <div
        className={'h-[150px] rounded-t-xl relative flex justify-center items-center'}
        style={{ backgroundColor: color }}
      >
        <div className="text-white text-2xl font-sans font-bold">
          {companyTitle}
        </div>
        <div className="rounded-full flex justify-center items-center w-[6rem] h-[6rem] bg-white absolute bottom-[-30%]">
          <div className={'rounded-xl p-1'} style={{ backgroundColor: color }}>
            <Link href={companyLink} target="_blank" passHref>
              <Image
                src={companyLogo}
                className="h-[3.5rem] w-[3.5rem] rounded-xl"
                alt="Badr Gharib"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start mt-8 p-3">
        <div className="text-[18px]  flex-col justify-start">
          {roleTitle}
          <div className="text-blue-800 text-sm">{date}</div>
        </div>

        <div>
          <ul className="list-disc p-5 text-[14px] text-gray-600">
            {roleInfo?.map((info, indx) => {
              return <li key={indx}>{info}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperianceCard
