import React from 'react';
import ExperianceCard from './controls/ExperianceCard';
import colors from 'tailwindcss/colors'
import { experianceCards, projects, skills } from '../utils/data';
import ViewOnScroll from './containers/motion.container';
import Card from './controls/Card';
import Title from './controls/Title';
import SkillCard from './controls/SkillCard';

interface Props {

}

function Skills(props: Props) {
   
  return (
    <div className='mt-12'>
        <ViewOnScroll>
         <Title>Skills</Title>
        
        <div className='flex justify-center items-stretch flex-wrap'>
            {
                skills.map((skill,indx)=>{
                    return <div key={indx} className='p-2 flex justify-center'>
                           
                              <SkillCard {...skill}/>
                           
                          </div>
                   
                })
            }
            
        </div>
        </ViewOnScroll>
    </div>
  );
}

export default Skills;

