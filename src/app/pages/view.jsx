import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Cards from '../components/cards'
import Video from '../components/video'

function View(){

  const locate = useLocation()
  let {id} = useParams()

  
  const link = locate.state.vlink || 0
  const title = locate.state.title 
  const rate = locate.state.rate
  const duration = locate.state.duration
  const desc = locate.state.desc
  const quality = locate.state.quality
  const type = locate.state.type == 2 && "TV Show" || locate.state.type == 1 && "Movie" || "Image"

  const uParam = locate.state.type == 2 && "tv" || locate.state.type == 1 && "m" || "m"

    let last_ep, last_epName
    let link_obj = JSON.parse(JSON.stringify(link))
      if(type == "TV Show" && link !== 0){
	link_obj = JSON.parse(link)
	last_ep = link_obj[link_obj.length -1].url
	last_epName = link_obj[link_obj.length -1].ep_no
    }

   const [isEp,setEp] =  useState(last_ep || link_obj)
   const [isEpName,setEpName] =  useState(last_epName || " Episode 1")

    const [isData,setData] = useState()
    
  useEffect(()=>{

    if(link == 0){
	console.log(`running api`)
	axios.get(API_URL)
      	.then((response) => {
		console.log(response.data)
	  	setData(response.data)
      })
    }

  },[isEp])


  const API_URL = `https://streamo-api.herokuapp.com/${uParam}/${id}`
  

  const setMovieV =  () => {
		  return (
			<button
			key={isEpName}
			className="bg-[#37474F90] text-white
			pl-5 pr-5 p-1 m-1 text-xl
			rounded-xl
			font-bold
			hover:text-[#84FFFF]	
			"
			>
			      
			{  isEpName  }	

		</button>
			
		  )
		
		}


  if(link === 0){
   
	    
    const title = isData && isData.media_info[0].title
    const desc = isData && isData.media_info[0].description
    const rate = isData && isData.media_info[0].rating
    const quality = isData && isData.media_info[0].quality
    const year = isData && isData.media_info[0].year
    const region = isData && isData.media_info[0].region
    const time = isData && isData.media_info[0].duraton
    const cast = isData && isData.media_info[0].cast


    document.title = `Streamo | ${title}-${isEpName}`

    let links = isData && isData.media_data[0]

    let default_link = isData && isData.media_data[0].iframeLink

    return (

	<>
		  <Cards heading={`${title || " Loading "}-${isEpName}`}>

		<Video link={default_link !== null && isEp || default_link} title={isEpName}/>

	      <div className="p-2 mb-3  bg-[#37474F30]">
			  { type == "TV Show"  && isData && isData.media_data.map(media => {
			    return(			    
			<button
			    onClick={ () => {
					setEp(media.iframeLink)
					setEpName(" Episode " + media.episode)
					console.log(media.iframeLink)
					console.log(media.episode)
			      		default_link = null
			      		
				} }
			key={media.episode}
			className="bg-[#37474F90] text-white
			pl-5 pr-5 p-1 m-1 text-xl
		rounded-xl focus:outline-none
			font-bold
			hover:text-[#84FFFF]	
			"
			>
			      
		Episode - {  media.episode  }	

		</button>

			    )
		}) } 

    		{
			type == "Movie" && setMovieV()
		}


	    <div 
		className="mt-5 flex flex-col text-lg 
		p-2 rounded-lg text-[#B0BEC5]
		font-semibold bg-[#37474F50]">
	    			<span>
				  Current Episode : 
		      <span className="pl-2 text-[#80DEEA]">
				    { isEpName }
			</span>
				</span>
				  <span>
				    Rating :

		    <span className="pl-2 text-[#C6FF00]">
				    { rate }
			</span>
				  </span>
			  <span>
				Duration : 
			<span className="pl-2 text-[#00C853]">
			  { time || "00:00" }
			</span>
			  </span>
			  <span>
			    Description : 
			<span className="pl-2 text-[#90A4AE]">
				{ desc }
		      </span>
			  	</span>
			  <span>
			    Quality :
				<span className="pl-2 text-[#FFB74D]">
			    { quality }
				</span>
			  	</span>
			  <span>
			    Cast :
				<span className="pl-2 text-[#4FC3F790]">
			    { cast || "Unknown" }
				</span>
			  	</span>
			  <span className="mt-1">	
			  <span className="bg-[#37474F]
			    rounded-md text-[#AB47BC] pl-1 pr-1 p-[0.10rem]">
			    { type }
			  </span>
			  </span>

			  <span className="mt-1">	
			  <span className="bg-[#37474F]
			    rounded-md text-[#00E676] pl-1 pr-1 p-[0.10rem]">
			    { year }
			  </span>
			  </span>
		      </div>
		    </div>

		  </Cards>
       </>



  )
  } else {

    console.log(`load video`)
    document.title = `Streamo | ${title}-${isEpName}`
    return (
		<>
		  <Cards heading={`${title}-${isEpName}`}>

		<Video link={isEp} title={isEpName}/>

	      <div className="p-2 mb-3  bg-[#37474F30]">
			  { type == "TV Show" && link_obj && link_obj.map(media => {
			    return(
			    
			<button
			    onClick={ () => {
					setEp(media.url)
					setEpName(media.ep_no)
			      		
				} }
			key={media.ep_no}
			className="bg-[#37474F90] text-white
			pl-5 pr-5 p-1 m-1 text-xl
		rounded-xl focus:outline-none
			font-bold
			hover:text-[#84FFFF]	
			"
			>
			      
			{  media.ep_no  }	

		</button>

			    )
			  }) }

		{
		  type == "Movie" && setMovieV()
		
		}

	    <div 
		className="mt-5 flex flex-col text-lg 
		p-2 rounded-lg text-[#B0BEC5]
		font-semibold bg-[#37474F50]">
	    			<span>
				  Current Episode : 
		      <span className="pl-2 text-[#80DEEA]">
				    { isEpName }
			</span>
				</span>
				  <span>
				    Rating :

		    <span className="pl-2 text-[#C6FF00]">
				    { rate }
			</span>
				  </span>
			  <span>
				Duration : 
			<span className="pl-2 text-[#00C853]">
			    { duration }
			</span>
			  </span>
			  <span>
			    Description : 
			<span className="pl-2 text-[#90A4AE]">
				{ desc }
		      </span>
			  	</span>
			  <span>
			    Quality :
				<span className="pl-2 text-[#FFB74D]">
			    { quality }
				</span>
			  	</span>
			  <span className="mt-1">	
			  <span className="bg-[#37474F]
			    rounded-md text-[#AB47BC] pl-1 pr-1 p-[0.10rem]">
			    { type }
			  </span>
			  </span>

		      </div>
		    </div>

		  </Cards>
    </>
  )
  }
  

}

export default View
