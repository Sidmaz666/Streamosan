import React from 'react'

function Cards({children, heading, loadMore }){
  return (
    <>
      <span 
	  className="text-xl md:text-2xl flex p-5 md:justify-center
	  bg-gradient-to-r from-[#142d38] to-[#0f1d24] 
	border-b border-[#4DD0E1]/30
	 text-[#B2EBF298]
	  font-semibold">
	{heading}
	</span>
      <div 
	className="flex flex-wrap justify-center 
	p-1 md:p-3  
	bg-gradient-to-r from-[#142d38] to-[#0f1d24]">
	{children}
      </div>
    </>

  )
}

export default Cards
