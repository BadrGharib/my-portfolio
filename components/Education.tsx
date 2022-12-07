import React from 'react';
import ExperianceCard from './controls/ExperianceCard';
import colors from 'tailwindcss/colors'
import { experianceCards, projects } from '../utils/data';
import ViewOnScroll from './containers/motion.container';
import Card from './controls/Card';
import Title from './controls/Title';
import Item ,{} from './controls/Item';
import { IItem } from '../utils/types';
import Image from 'next/image';

interface Props {

}

function Education(props: Props) {
  return (
    <div>
        <ViewOnScroll>
         <Title>Education</Title>
        
         <div className={`text-2xl font-nerkoOne mt-3 flex flex-col justify-start items-start`}>
            <div className='flex items-center'>
            <div className='flex justify-center items-center rounded-[50%] w-[100px] h-[100px] border border-gray-300'>
                <Image
                    src={"/imgs/assuit.jpg"}
                    className=""
                    alt=""
                    width={600}
                    height={300}
                    />
            </div>
              <div>
                <h2 className='text-[26px] m-5' style={{lineHeight:"1px"}}>B. Sc. Computer Science</h2>
                
                {
                    <>
                        <p className='m-5 text-[20px] italic text-sm ml-4'>
                            Faculty of Science, Assiut University
                        </p>
                        <p className='text-blue-800 m-5 text-[24px] italic text-sm ml-4'>
                         2006 - Present 
                        </p>
                   </>
                } 
              </div>
             </div>      
            </div>  
        </ViewOnScroll>
    </div>
  );
}

export default Education;

