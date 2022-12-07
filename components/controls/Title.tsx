import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link'
import { CardInfo } from '../../utils/types';

interface ITitle{
  children:ReactNode
}
function Title({children}:ITitle){
  return (
    <div className='text-2xl text-blue-800 font-nerkoOne'>
     {children}
     <div className='border-t-4 mt-1 border-gray-700 w-20'></div>
   </div>  
  );
}

export default Title;

