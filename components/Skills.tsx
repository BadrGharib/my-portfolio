import React, { ReactElement } from 'react'
import { skills } from '../utils/data'
import ViewOnScroll from './containers/motion.container'
import Title from './controls/Title'
import SkillCard from './controls/SkillCard'

function Skills (props: {}): ReactElement {
  return (
    <div className="mt-12">
      <ViewOnScroll>
        <Title>Skills</Title>

        <div className="flex justify-center items-stretch flex-wrap">
          {skills.map((skill, indx) => {
            return (
              <div key={indx} className="p-2 flex justify-center">
                <SkillCard {...skill} />
              </div>
            )
          })}
        </div>
      </ViewOnScroll>
    </div>
  )
}

export default Skills
