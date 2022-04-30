import React, { useContext } from 'react'
import deleteIcon from '../images/icon-delete.svg'
import thumbnailProduct1 from '../images/image-product-1-thumbnail.jpg'
import { AppContext } from '../App'

const CartItem = () => {
  const { clearCart, resetItemCount, itemCount } = useContext(AppContext)
  return (
    <div className='flex flex-row mb-4 items-center w-full'>
      <img src={thumbnailProduct1} alt='cart thumbnail' className='w-12 h-12 rounded-md'/>
      <div className='text-[12px] text-gray-500 mx-4 w-full'>
        <span>Fall Limited Edition Sneakers...</span> <br/>
        <span>$125 x {itemCount} = <span className='font-bold'>${125 * itemCount}</span></span>
      </div>
      <img src={deleteIcon} alt='delete icon' className='cursor-pointer' 
      onClick={() => {
        clearCart()
        resetItemCount()
      }}
      />
    </div>
  )
}

const Cart = ({className}) => {
  const { isCartEmpty } = useContext(AppContext)
  const isEmpty = isCartEmpty
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