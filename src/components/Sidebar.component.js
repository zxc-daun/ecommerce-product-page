import React, { useContext } from 'react'
import { AppContext } from '../App'
import deleteIcon from '../images/icon-close.svg'

const Sidebar = () => {
  const { toggleSidebar } = useContext(AppContext)

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-20'>
      <div className='w-[15rem] h-full px-8 py-12 bg-white shadow-[0_0_0_100vw_rgba(0,_0,_0,_0.5)]'>
        <img src={deleteIcon} alt='delete icon' className='cursor-pointer'
        onClick={ toggleSidebar }
        />
        <ul className='mt-16 font-bold text-xl'>
          <li className='mb-4 hover:opacity-60 cursor-pointer'>Collections</li>
          <li className='mb-4 hover:opacity-60 cursor-pointer'>Men</li>
          <li className='mb-4 hover:opacity-60 cursor-pointer'>Women</li>
          <li className='mb-4 hover:opacity-60 cursor-pointer'>About</li>
          <li className='mb-4 hover:opacity-60 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar