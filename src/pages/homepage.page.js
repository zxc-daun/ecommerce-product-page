import React, { useContext } from "react"
import Header from "../components/Header.component"
import ItemDesription from "../components/ItemDescription.component"
import Itemview from '../components/Itemview.component'
import Sidebar from "../components/Sidebar.component"
import ItemPreview from "../components/ItemOreview.component"
import { AppContext } from "../App"

const Homepage = () => {
  const { isHamburgerClicked, isPreviewClicked } = useContext(AppContext)
  const isMenuClicked = isHamburgerClicked

  const isPreview = isPreviewClicked
  return (
    <div className="relative">
      <Header />
      <hr className="md:mx-32 lg:mx-48"/>
      <div className='w-full md:px-32 lg:px-48 flex flex-col md:flex-row'>
        <Itemview />
        <ItemDesription />
      </div>
      {
        isMenuClicked ? 
        <Sidebar /> : ''
      }
      {
        isPreview ?
        <ItemPreview /> : ''
      }
    </div>
  )
}
export default Homepage;