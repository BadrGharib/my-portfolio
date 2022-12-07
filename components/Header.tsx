import React from 'react';
import NavBar ,{NavItem} from './controls/NavBar';
function Header() {
  const items:NavItem[]=[
    {
      title:"Skills",
      href:"#Skills"
    },
    {
      title:"Education",
      href:"#Education"
    },
    {
      title:"Experiance",
      href:"#Experiance"
    },
    {
      title:"Projects",
      href:"#Projects"
    },
    {
      title:"Certifications",
      href:"#Certifications"
    },
    {
      title:"Languages",
      href:"#Languages"
    }
  ]
  return (
    <div className='fixed top-0 left-0 px-1 sm:px-[10%] w-full z-[10]'>
      <NavBar logo="/imgs/badr.jpg" items={items} title="Badr Gharib" />
    </div>
     
    
  );
}

export default Header;
