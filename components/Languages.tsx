import React from 'react';
import ExperianceCard from './controls/ExperianceCard';
import colors from 'tailwindcss/colors'
import { experianceCards, projects } from '../utils/data';
import ViewOnScroll from './containers/motion.container';
import Card from './controls/Card';
import Title from './controls/Title';
import Item ,{} from './controls/Item';
import { IItem } from '../utils/types';

interface Props {

}

function Languages(props: Props) {
  const languages:IItem[]=[
    {
        title:"English",
        smallTitle:`Very Good`,
        
    },
    {
        title:"Arabic",
        smallTitle:`Native`,
       
       
    },
    {
        title:"German",
        smallTitle:`A1`,
       
    }

]
   
  return (
    <div className='mt-12'>
        <ViewOnScroll>
         <Title>Languages</Title>
        
        <div className='flex items-stretch flex-wrap'>
            {
                languages.map((language,indx)=>{
                    return <div key={indx} className='p-2 mr-10'>
                              <Item {...language} icon={"/imgs/item.png"}/>
                          </div>
                   
                })
            }
            
        </div>
        </ViewOnScroll>
    </div>
  );
}

export default Languages;

