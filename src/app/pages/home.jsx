import  React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/card'
import Cards from '../components/cards'
import { TailSpin } from 'react-loader-spinner'


function HomePage(){
const [isMovie,setMovie] = useState()
const [isLoad,setLoad] = useState(true)

  useEffect(() => {
    const API_URL=`https://streamo-api.herokuapp.com/?limit=16`
    axios.get(API_URL)
      .then((response) => {
	setMovie(response.data[0].movie_list)
	setLoad(false)
	document.title = "Streamo | Home"
      })

  },[])



  return(
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

      <Cards heading="Popular Shows" >
    {
      isMovie && isMovie.map(Movie => {
	const title = Movie.post_title
	const thumb = Movie.image
	const desc = Movie.post_excerpt
	const rate = Movie.imdb
	const episode = Movie.episodes
	const video_url = (JSON.parse(episode)[0].url_player)
	const quality = Movie.quality
	const duration = Movie.duration
	const type = Movie.type
	const media_id = Movie.post_name



	return (
	  <Card thumb={thumb} title={title}
      		desc={desc} key={title} rate={rate} vlink={video_url}
		media_id={media_id}
      		quality={quality} time={duration} type={type} />
	)


	})
      }
      </Cards>


	</>

      }


    </>
  )
}

export default HomePage
