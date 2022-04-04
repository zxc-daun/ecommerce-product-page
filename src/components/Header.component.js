import React from 'react'
import headerLogo from '../images/logo.svg'
import cartIcon from '../images/icon-cart.svg'
import avatarImage from '../images/image-avatar.png'
import menuIcon from '../images/icon-menu.svg'

import Cart from './Cart.component'

const Navbar = () => {
  return (
    <nav className='mr-auto hidden md:block'>
      <ul className='flex flex-row'>
        <li className='opacity-50 hover:opacity-100 ml-2 md:ml-10 cursor-pointer'>Collections</li>
        <li className='opacity-50 hover:opacity-100 ml-2 md:ml-4 cursor-pointer'>Men</li>
        <li className='opacity-50 hover:opacity-100 ml-2 md:ml-4 cursor-pointer'>Women</li>
        <li className='opacity-50 hover:opacity-100 ml-2 md:ml-4 cursor-pointer'>Women</li>
        <li className='opacity-50 hover:opacity-100 ml-2 md:ml-4 cursor-pointer'>Contact</li>
      </ul>
    </nav>
  )
}
 
const Header = () => {
  // const isCartOpen = true
  const isCartOpen = false
  return (
    <header className='relative flex flex-row items-center justify-center p-4 md:px-32 lg:px-48 md:py-6'>
      <img src={menuIcon} className='w-4 h-4 cursor-pointer md:hidden' alt='menu item'/>
      <img src={headerLogo} className='w-32 h-4 md:h-6 md:w-36 ml-4 md:ml-0 cursor-pointer' alt='header logo'/>
      <Navbar />
      <div className='relative w-fit h-fit ml-auto mr-4 md:mr-6'>
        <img src={cartIcon} className='w-4 h-4 md:w-6 md:h-6 cursor-pointer' alt='cart icon'/>
        <Cart className={`absolute hidden ${isCartOpen ? 'md:block' : 'md:hidden'} top-12 min-w-[21rem] transform translate-x-[-48%]`}/>
      </div>
      <Cart className={`absolute top-16 w-[95vw] ${isCartOpen ? 'block' : 'hidden'} md:hidden`}/>
      <img src={avatarImage} className='w-6 h-6 md:h-12 md:w-12 cursor-pointer' alt='avatar'/>
    </header>
  )
}

export default Header;