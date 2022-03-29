import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cards from '../components/cards'
import Card from '../components/card'
import { BiChevronsDown } from 'react-icons/bi'
import { TailSpin } from 'react-loader-spinner'

function Genre(){

	let {genre} = useParams()
  	
  	const [isCatList,setCatList] = useState()
  	const [selGenre,setGenre] = useState("action")
  	
  	const [isList,setList] = useState()
	const [isLoad,setLoad] = useState(true)
  useEffect(() => {

    axios.get(`https://streamo-api.herokuapp.com/category`)
      .then(response => {
		setCatList(response.data)
      })
	  	
  },[])

  useEffect(() => {
      axios.get(`https://streamo-api.herokuapp.com/category/${selGenre}`)
      .then(response => {
	document.title = `Streamo | Category -  ${selGenre.charAt(0).toUpperCase() + selGenre.slice(1)} `
	setList(response.data.result)
		setLoad(false)
	})
    },[selGenre])

  	
	return (
	  <>
	          { isLoad ? <><br/>
		    <div
		  className="
		  p-2
		  flex
		  justify-center
		  items-center
		  "
		    >
	<TailSpin
 	 ariaLabel="loading-indicator"
	  height={100}
	  width={1000}
	  color="#B2EBF2"
	/>
		    </div>
	  <br/>
	</> : <>

	    <Cards heading={`Select From Popular Categories : ${selGenre.charAt(0).toUpperCase() + selGenre.slice(1)
	      }`}>
	      
	      <div className="p-2 mb-3  bg-[#37474F30]">
    		{  isCatList && isCatList.map(genre => {
		return(
			<button
		  	onClick={ () => { setGenre(`${genre.name}`) } }
			key={genre.name}
			className="bg-[#37474F90] text-white
			pl-2 pr-2 p-1 m-1 text-xl
			rounded-xl
			font-bold
			hover:text-[#84FFFF]	
			"
			>
			{
			  genre.name.charAt(0).toUpperCase() + genre.name.slice(1)

		}</button>
		)
	      })  }
	    </div>
	      {
		isList && isList.map(media => {
		  return (
	  <Card thumb={media.thumb} title={media.title}
      		desc="Not Available"
	        key={media.title} 
		media_id={media.media_id}
      		quality={media.quality}
	    	 type={media.media_type == "Movie" && 1 || 2 } />
		  )
	      })
	      }

	    </Cards>

	  </>
		  }
	  </>

	)

}

export default Genre
