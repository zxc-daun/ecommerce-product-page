import React, { useContext } from 'react'
import imageProduct1 from '../images/image-product-1.jpg'
import imageProduct2 from '../images/image-product-2.jpg'
import imageProduct3 from '../images/image-product-3.jpg'
import imageProduct4 from '../images/image-product-4.jpg'
import nextIcon from '../images/icon-next.svg'
import previousIcon from '../images/icon-previous.svg'

import imageThumbnail1 from '../images/image-product-1-thumbnail.jpg'
import imageThumbnail2 from '../images/image-product-2-thumbnail.jpg'
import imageThumbnail3 from '../images/image-product-3-thumbnail.jpg'
import imageThumbnail4 from '../images/image-product-4-thumbnail.jpg'
import { AppContext } from '../App'

const Iconwrapper = ({src, translate, isPreview, onClickProp}) => {
  return (
    <div className={
      `bg-slate-50 px-2.5 py-2 rounded-full w-fit
       cursor-pointer trasform ${translate} 
       ${isPreview ? '' : 'md:hidden'}
    `}>
      <img src={src} className='min-w-[0.75rem]' alt='icons' onClick={onClickProp}/>
    </div>
  )
}

const Imageslides = ({isPreview}) => {
  const {currentImageNum, togglePreviewClick, updateImageNum} = useContext(AppContext)
  const imageSrcArray = [imageProduct1, imageProduct2, imageProduct3, imageProduct4]

  return (
    <div className='w-full flex justify-center items-center p-0 md:mb-12'>
      <Iconwrapper src={previousIcon} translate='translate-x-12' isPreview={isPreview} 
      onClickProp = {() => updateImageNum((currentImageNum+3) % 4)}
      />
      <img src={imageSrcArray[currentImageNum]} className='w-full md:max-w-[24em] md:rounded-lg max-h-96' alt='productimage'
      onClick={togglePreviewClick}
      />
      <Iconwrapper src={ nextIcon} translate='-translate-x-12' isPreview={isPreview}
      onClickProp = {() => updateImageNum((currentImageNum+5) % 4)}
      />
    </div>
  )
}

const ImageThunbnail = ({src, num}) => {
  const {updateImageNum} = useContext(AppContext)
  return (
    <div className='rounded-lg'>
      <img src={src} alt='thumbnail' className='rounded-lg cursor-pointer
       border-2 border-transparent
       hover:border-2 hover:border-orange-500 hover:opacity-60'
       onClick={() => {
        updateImageNum(+num)
       }}
      />
    </div>
  )
}

const Imagewrapper = () => {
  const thumbnailList = [imageThumbnail1, imageThumbnail2, imageThumbnail3, imageThumbnail4]
  return (
    <div className='hidden md:flex md:flex-row md:mx-auto md:gap-4 md:max-w-[24em]'>
      {
        thumbnailList.map((src, index) => {
          return <ImageThunbnail src={src} key={index} num={index}/>
        })
      }
    </div>
  )
}

const Itemview = ({isPreview}) => {
  return (
    <div className={`w-full md:p-12 ${isPreview ? 'md:w-full' : 'md:w-1/2'}`}>
      <Imageslides isPreview={isPreview}/>
      <Imagewrapper />
    </div>
  )
}

export default Itemview;