import React, { useContext } from 'react'
import minusIcon from '../images/icon-minus.svg'
import plusIcon from '../images/icon-plus.svg'
import iconCart from '../images/icon-cart.svg'
import { AppContext } from '../App'

const ItemDesription = () => {
  const { fillCart, itemCount, increment, decrement } = useContext(AppContext)

  return (
    <div className='w-full md:w-1/2 p-4 sm:p-8 md:p-12 lg:py-24 lg:px-12 '>
      <h3 className='mb-4 font-bold tracking-wider text-orange-500 text-base'>SNEAKER COMPANY</h3>
      <h1 className='text-4xl font-extrabold'>Fall Limited Edition Sneakers</h1>
      <p className='text-gray-400 my-6'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everthing the weather can offer.</p>
      <div className='flex flex-row flex-wrap w-full items-center'>
        <span className='font-bold text-3xl'>$125.00</span>
        <span className='text-base py-0.5 px-2 rounded-md font-bold
         bg-orange-100 text-orange-400 ml-8'
        >50%</span>
        <span className='ml-auto md:ml-0 md:w-full
          text-gray-400 line-through text-base'
        >$250.00</span>
      </div>
      <div className='mt-8 w-full flex flex-row flex-wrap'>
        <div className='flex flex-row items-center justify-between
        bg-amber-100 py-2 px-4
        rounded-md w-full md:w-fit
        '
        >
          <img src={minusIcon}  alt='minus icon' className='cursor-pointer' onClick={decrement}/>
          <span className='mx-8'>
            {
              itemCount
            }
          </span>
          <img src={plusIcon}  alt='add icon' className='cursor-pointer' onClick={ increment }/>
        </div>
        <button className='flex flex-row items-center gap-2 justify-center
         ml-0 mt-4 md:mt-0 md:ml-4 bg-orange-500 text-sm text-white px-12 py-4 rounded-md
         w-full md:w-fit shadow-2xl shadow-orange-300
         ' onClick={()=> {
           if(itemCount > 0) {
             fillCart()
           }
         }} >
          <img src={iconCart} className='w-4 h-4'/>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}

export default ItemDesription