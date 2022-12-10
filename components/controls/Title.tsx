
import React, { ReactElement, ReactNode } from 'react'

interface ITitle {
  children: ReactNode
}
function Title ({ children }: ITitle): ReactElement {
  return (
    <div className="text-2xl text-blue-800 font-nerkoOne">
      {children}
      <div className="border-t-4 mt-1 border-gray-700 w-20"></div>
    </div>
  )
}

export default Title
