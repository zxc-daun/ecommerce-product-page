import { useState } from "react"
export const useInitialState = () => {
  const [isCartClicked, updateIsCartClicked] = useState(false)

  const toggleCartClick = () => updateIsCartClicked(!isCartClicked)

  const [isCartEmpty, updateIsCartEmpty] = useState(true)
  const clearCart = () => updateIsCartEmpty(true)
  const fillCart = () => updateIsCartEmpty(false)

  const [itemCount, updateItemCount] = useState(0)
  const increment = () => updateItemCount(+itemCount+1)
  const decrement = () => {
    if(+itemCount == 1) {
      clearCart()
    }
    updateItemCount(+itemCount > 0 ? +itemCount-1 : 0)
  }
  const resetItemCount = () => updateItemCount(0)

  const [isHamburgerClicked, updateIsHamburgerClicked] = useState(false)
  const toggleSidebar = () => updateIsHamburgerClicked(!isHamburgerClicked)

  const [currentImageNum, updateCurrentImageNum] = useState(0)
  const updateImageNum = num => updateCurrentImageNum(num)

  const [ isPreviewClicked, updateIsPreviewClicked ] = useState(true)
  const togglePreviewClick = () => updateIsPreviewClicked(!isPreviewClicked)
  
  return {
    isCartClicked,
    toggleCartClick,
    isPreviewClicked,
    togglePreviewClick,
    isCartEmpty,
    clearCart,
    fillCart,
    itemCount,
    increment,
    decrement,
    resetItemCount,
    isHamburgerClicked,
    toggleSidebar,
    updateImageNum,
    currentImageNum
  }
}