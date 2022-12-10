import Image from 'next/image'
import React, { ReactElement } from 'react'
import { IItem } from '../../utils/types'

interface IMainItem extends IItem {
  // children?:ReactNode,
  icon: string
}
function Item ({
  icon,
  title,
  smallTitle,
  className
}: IMainItem & React.HTMLAttributes<HTMLButtonElement>): ReactElement {
  return (
    <div
      className={`text-2xl font-nerkoOne flex flex-col justify-center items-center ${className ?? ''}`}
    >
      <div className="flex items-center">
        <Image
          src={icon ?? '/imgs/item.png'}
          className="h-[15px] w-[15px]"
          alt=""
          width={20}
          height={20}
        />

        <h2 className="text-[18px] m-1 w-[90%]" style={{ lineHeight: '1px' }}>
          {title}
        </h2>
      </div>
      {smallTitle && (
        <p className="text-blue-800 italic text-sm ml-4">{smallTitle}</p>
      )}
    </div>
  )
}

export default Item
