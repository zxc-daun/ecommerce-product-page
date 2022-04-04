import React from 'react'
import closeIcon from '../images/icon-close.svg'
import Itemview from './Itemview.component'

const ItemPreview = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-30'>
      <div className='p-12 w-full h-full flex flex-col items-center shadow-[inset_0_0_0_100vh_rgba(0,0,0,0.5)]'>
       <div>
        <img src={closeIcon} alt='close icon' className='w-4 h-4 bg-white ml-auto mr-20 cursor-pointer'/>
        <Itemview isPreview='true'/>
       </div>
      </div>
    </div>
  )
}

export default ItemPreview