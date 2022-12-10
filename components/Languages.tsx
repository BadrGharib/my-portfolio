import React, { ReactElement } from 'react'
import ViewOnScroll from './containers/motion.container'
import Title from './controls/Title'
import Item from './controls/Item'
import { IItem } from '../utils/types'

function Languages (props: {}): ReactElement {
  const languages: IItem[] = [
    {
      title: 'English',
      smallTitle: 'Very Good'
    },
    {
      title: 'Arabic',
      smallTitle: 'Native'
    },
    {
      title: 'German',
      smallTitle: 'A1'
    }
  ]

  return (
    <div className="mt-12">
      <ViewOnScroll>
        <Title>Languages</Title>

        <div className="flex items-stretch flex-wrap">
          {languages.map((language, indx) => {
            return (
              <div key={indx} className="p-2 mr-10">
                <Item {...language} icon={'/imgs/item.png'} />
              </div>
            )
          })}
        </div>
      </ViewOnScroll>
    </div>
  )
}

export default Languages
