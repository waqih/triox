import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navbar = () => {
  return (
   <>
   <div className='flex h-20 items-center justify-around my-2'>
   <div className='w-40'>
    <img src="/logo.svg" alt="" width={80} height={65}/>
   </div>
   <ul className='flex gap-8 medium'>
    <li>Retainers <KeyboardArrowDownIcon/></li>
    <li>Business Solutions <KeyboardArrowDownIcon/></li>
    <li>Services <KeyboardArrowDownIcon/></li>
    <li>Technologies <KeyboardArrowDownIcon/></li>
    <li>Insights <KeyboardArrowDownIcon/></li>
   </ul>
   <button className='w-44 p-3 rounded-lg medium' style={{backgroundColor:'#FEF3DD'}}>Book a meeting</button>
   </div>
  
   </>
  )
}

export default Navbar