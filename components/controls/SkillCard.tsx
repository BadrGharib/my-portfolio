import Image from 'next/image'
import React, { ReactElement } from 'react'
import { ISkillCard } from '../../utils/types'

function SkillCard ({ title, icon, percent }: ISkillCard): ReactElement {
  return (
    <div className="flex flex-col justify-center items-center w-[150px]">
      <div className="flex justify-center items-center rounded-[50%] w-[70px] h-[70px] border border-gray-300">
        <Image src={icon} className="w-[30px]" alt="" width={50} height={30} />
      </div>
      {title}
      <div className="w-full bg-gray-200 rounded-full">
        <div
          className="bg-blue-600 text-xs font-medium h-[2px] text-blue-100 text-center p-0.5 leading-none rounded-l-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="text-gray-500 text-[10px]">{`${percent} %`}</div>
    </div>
  )
}

export default SkillCard
