import React, { ReactElement } from 'react'
import ExperianceCard from './controls/ExperianceCard'
import { experianceCards } from '../utils/data'
import ViewOnScroll from './containers/motion.container'
import Title from './controls/Title'

function Experiance (props: {}): ReactElement {
  return (
    <div className="mt-12">
      <ViewOnScroll>
        <Title>Experiances</Title>
        <div className="flex items-stretch flex-wrap justify-center md:justify-between">
          {experianceCards.map((experiance, indx) => {
            return (
              <div
                key={indx}
                className="p-2 w-[90%] md:w-1/2 lg:w-1/4 flex justify-center"
              >
                <ExperianceCard {...experiance} />
              </div>
            )
          })}
        </div>
      </ViewOnScroll>
    </div>
  )
}

export default Experiance
