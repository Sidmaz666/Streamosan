import React from 'react'
import Footer from '../components/footer'

function Contain({children}){

  return (
    <>
      <div className="translate-y-10 xl:translate-y-12 z-0">
      {children}
       <Footer/>
    </div>
    </>
  )

}

export default Contain
