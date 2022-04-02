import React from 'react'
import headerLogo from '../images/logo.svg'
import cartIcon from '../images/icon-cart.svg'
import avatarImage from '../images/image-avatar.png'
import menuIcon from '../images/icon-menu.svg'

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
  return (
    <header className='flex flex-row items-center p-4 md:px-32 lg:px-48 md:py-6'>
      <img src={menuIcon} className='w-4 h-4 cursor-pointer md:hidden' alt='menu item'/>
      <img src={headerLogo} className='w-32 h-4 md:h-6 md:w-36 ml-4 md:ml-0 cursor-pointer' alt='header logo'/>
      <Navbar />
      <img src={cartIcon} className='w-4 h-4 md:w-6 md:h-6 ml-auto mr-4 md:mr-6 cursor-pointer' alt='cart icon'/>
      <img src={avatarImage} className='w-6 h-6 md:h-12 md:w-12 cursor-pointer' alt='avatar'/>
    </header>
  )
}

export default Header;