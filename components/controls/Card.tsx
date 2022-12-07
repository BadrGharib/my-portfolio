import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { CardInfo } from '../../utils/types';


function Card({imgs,title,description,link,logo,smallTitle}: CardInfo) {

 const [selectedImg, setSelectedImg] = useState<string>("");

 useEffect(() => {
  imgs && imgs.length>0 && setSelectedImg(imgs[0])
 }, [imgs]);

  return (
    <div className='flex  flex-col w-full rounded-xl h-[100%] shadow-lg p-2 relative '>
      {
        logo &&
        <div className="h-10 w-10 rounded-tl-[0] rounded-tr-[4px] rounded-br-[0] rounded-bl-[100%] border bg-blue-800 absolute top-0 right-0 flex justify-end items-start">
        <Image
            src={logo}
            className="h-3/4 w-3/4"
            alt=""
            width={40}
            height={40}
          /> 
        </div>
          
      }
    {
     selectedImg && 
      <>
      <div className='h-[250px] w-full flex items-center justify-center flex-wrap relative rounded-xl shadow-md'>
          <Image
            src={selectedImg}
            className="h-full w-full mb-1 rounded-xl border-gray-500"
            alt=""
            width={1920}
            height={1080}
          />
        
      </div>
        {
          imgs && imgs.length >1 &&
        <div className='h-[40px] w-[100%] flex items-center justify-center mt-2'>
            {
                imgs.map((img:string ,indx:number)=>{
                    return (
                      <Image
                        key={indx}
                        src={img}
                        className="h-[35px] w-[35px] mb-1 rounded-lg m-2 cursor-pointer transition-all ease-in-out duration-300 hover:w-[45px] hover:h-[45px] border border-gray-500 shadow-xl"
                        alt=""
                        width={50}
                        height={30}
                        onClick={()=>{setSelectedImg(img)}}
                      />
                    );
                })

            }
          </div>
          }
        </>
       }
    <h2 className='text-[18px] m-1 w-[90%]'>{title}</h2>
    {
      smallTitle && <p className='text-blue-800 italic text-sm'>
        {smallTitle}
      </p>
    }
     {
        link &&
        <Link className='text-blue-600 font-sans break-all' href={link} target="_blank" passHref>{link}</Link>
      }
    <p className='text- m-1 text-[14px] text-gray-600'>
      {
          description
      }
    </p>
   </div>
  );
}

export default Card;

