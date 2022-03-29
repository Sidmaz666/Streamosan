import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cards from '../components/cards'
import Card from '../components/card'
import { BiChevronsDown } from 'react-icons/bi'
import {TailSpin} from 'react-loader-spinner'

function Search(){

	let {query} = useParams()
  	const [isPage,setPage] = useState(1)
  	const [isLoad,setLoad] = useState(true)
  	const [isResult,setResult] = useState()
        

  useEffect(() => {
    
    const san_query = query.replaceAll(" ","-")

	const API_URL = `https://streamo-api.herokuapp.com/search/${san_query}?page=${isPage}`

    axios.get(API_URL)
      .then(response => {
	if(response.data.result.length == 0){
	  Spage()
	}
	setResult(JSON.stringify(response.data.result))
	setLoad(false)
	  	
	  if(window.location.pathname.split('/')[1] == "search"){

	document.getElementById('searchInput').addEventListener("focus",function(){
	  	

	    Spage()	  
	  	
	    })
	  
	  }
	  	
  })},[query, isPage])


  const Spage = () => {
		setPage(1)
  	}
  	
	return (
	  <>
	          { isLoad ? <><br/>
	<TailSpin
 	 ariaLabel="loading-indicator"
	  height={100}
	  width={1000}
	  color="#B2EBF2"
	/>
	  <br/>
	</> : <>
	    <Cards heading={`Search Results For : ${query} `}>

      {
	isResult && JSON.parse(isResult).map(media =>{
	const title = media.title 
	const thumb = media.thumb
	const quality = media.quality
	const type = media.media_type == "Movie" && 1 || 2
	const duration = media.show_status
	const media_id = media.media_id

	return (
	  <Card thumb={thumb} title={title}
      		 key={`${title}-${Math.random()}`}
		media_id={media_id}
      		quality={quality} time={duration} type={type} />
	)
	})  
      }
	    </Cards>
	  <button 
	  className=" flex justify-center items-center
	  bg-gradient-to-r from-[#142d38] to-[#0f1d24] 
	  text-[#78909C] font-semibold w-full pb-2 text-xl
	transition ease-in-out duration-200
	focus:outline-none hover:text-[#80DEEA]
	"
	    onClick={
	      () => {

	    	setPage(isPage + 1)
	    }
	    }>
	  <BiChevronsDown className="text-3xl animate-pulse "/>
	  Load More
      </button>

	  </>
		  }
	  </>

	)

}

export default Search
