import React, { useEffect, useState } from 'react'
import Cards from '../components/cards'
import Card from '../components/card'
import axios from 'axios'


function Error(){
  const [isImg,setImg] = useState()
  useEffect(() => {
	axios.get("https://dog.ceo/api/breeds/image/random")
      .then((response) =>{
		setImg(response.data.message)
	document.title = "Error!! Page Not Found!"
      })
  },[])

  return (
    <div className=" h-screen overflow-auto
	  bg-gradient-to-r from-[#142d38] to-[#0f1d24] 
      ">
    <Cards heading="Error 404">
      <Card title="Page Doesn't Exist!"
	desc="The Page Doesn't Exist so enjoy the dog Pic 😁"
	rate="1000" quality="Cute" time="*.*" type="3" thumb={isImg}
      /> 
    </Cards>
    </div>
  )


}

export default Error
