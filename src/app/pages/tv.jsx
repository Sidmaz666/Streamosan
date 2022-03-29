import  React, { useState, useEffect } from 'react'
import { BiChevronsDown } from 'react-icons/bi'
import axios from 'axios'
import Card from '../components/card'
import Cards from '../components/cards'
import {TailSpin} from 'react-loader-spinner'

function TvShowPage(){
const [isLimit,setLimit] = useState(16)
const [isTv,setTv] = useState()
const [isLoad,setLoad] = useState(true)
  useEffect(() => {
    const API_URL=`https://streamo-api.herokuapp.com/?limit=${isLimit}`
    axios.get(API_URL)
      .then((response) => {
	setTv(response.data[0].tv_suggestions)
	setLoad(false)
	document.title = "TV shows | Streamo"
      })

  },[isLimit])

	

  return(
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
      <Cards heading="Popular TV Shows!">
    {
      isTv && isTv.map(Movie => {
	const title = Movie.post_title
	const thumb = Movie.image
	const desc = Movie.post_excerpt
	const rate = Movie.imdb
	const episode = Movie.episodes
	const video_url = (JSON.parse(episode))
	const video_urls = []
	
	video_url.map(episode => {
		const ep_no = episode.name
	  	const url = episode.url_player
	  video_urls.push({
		ep_no,
	    	url
	})
	})


	const quality = Movie.quality
	const duration = Movie.duration
	const type = Movie.type
	const media_id = Movie.post_name
	const links = JSON.stringify(video_urls)


	return (
	  <Card thumb={thumb} title={title}
      		desc={desc} key={title} rate={rate} 
		media_id={media_id} vlink={links}
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
	onClick={() => setLimit(isLimit + 10)}>
	<BiChevronsDown className="text-3xl animate-pulse "/>
	Load More
      </button>
    </>
	    }
    </>
  )
}

export default TvShowPage
