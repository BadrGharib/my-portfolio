import React, { FC } from 'react'
import { certifications } from '../utils/data'
import ViewOnScroll from './containers/motion.container'
import Card from './controls/Card'
import Title from './controls/Title'

const Certifications: FC<{}> = (props) => {
  return (
    <div className="mt-12">
      <ViewOnScroll>
        <Title>Certifications</Title>

        <div className="flex items-stretch flex-wrap justify-center md:justify-between">
          {certifications.map((project, indx) => {
            return (
              <div
                key={indx}
                className="p-2 w-[90%] md:w-1/2 lg:w-1/3 flex justify-center"
              >
                <Card {...project} />
              </div>
            )
          })}
        </div>
      </ViewOnScroll>
    </div>
  )
}

export default Certifications
