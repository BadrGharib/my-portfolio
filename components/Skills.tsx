import React, { ReactElement } from 'react'
import { skills } from '../utils/data'
import ViewOnScroll from './containers/motion.container'
import Title from './controls/Title'
import SkillCard from './controls/SkillCard'
import { groupBy } from '../utils/helpers'
import { GoTriangleRight } from 'react-icons/go'

function Skills (props: {}): ReactElement {
  const groupdSkills = groupBy(skills, 'group')
  return (
    <div className="mt-12">
      <ViewOnScroll>
        <>
        <Title>Skills</Title>
          {
            Object.values(groupdSkills).map((group, indx) => {
              return <div key={indx} className="flex justify-start items-center  flex-wrap">
              <GoTriangleRight className='fill-gray-600 w-5 h-5 hidden md:block'/>
              {group.map((skill, indx) => {
                return (
                  <div key={indx} className="p-2 flex justify-center">
                    <SkillCard {...skill} />
                  </div>
                )
              })}

            </div>
            })
          }
        </>
      </ViewOnScroll>
    </div>
  )
}

export default Skills
