import React from "react"
import Header from "../components/Header.component"
import ItemDesription from "../components/ItemDescription.component"
import Itemview from '../components/Itemview.component'

const Homepage = () => {
  return (
    <>
      <Header />
      <hr className="md:mx-32 lg:mx-48"/>
      <div className='w-full md:px-32 lg:px-48 flex flex-col md:flex-row'>
        <Itemview />
        <ItemDesription />
      </div>
    </>
  )
}
export default Homepage;