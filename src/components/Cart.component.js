import React from 'react'
import deleteIcon from '../images/icon-delete.svg'
import thumbnailProduct1 from '../images/image-product-1-thumbnail.jpg'

const CartItem = () => {
  return (
    <div className='flex flex-row mb-4 items-center w-full'>
      <img src={thumbnailProduct1} alt='cart thumbnail' className='w-12 h-12 rounded-md'/>
      <div className='text-[12px] text-gray-500 mx-4 w-full'>
        <span>Fall Limited Edition Sneakers...</span> <br/>
        <span>$125 x 3 <span className='font-bold'>$375</span></span>
      </div>
      <img src={deleteIcon} alt='delete icon' className='cursor-pointer'/>
    </div>
  )
}

const Cart = ({className, isEmpty}) => {
  // isEmpty = true
  return (
    <div className={`z-10 w-fit bg-white drop-shadow-lg ${className} rounded-md`}>
      <h3 className='px-4 py-3 font-bold'>Cart</h3>
      <hr />
      <div className='p-4 py-4 md:py-12 md:p-6'>
      {
        isEmpty ? 
        <p className='text-center'>Your Cart is Empty</p> :
        <>
          <CartItem />
          <button className='w-full bg-orange-400 text-white py-3 rounded-lg cursor-pointer'>Checkout</button>
        </>
      }
      </div>
    </div>
  )
}

export default Cart