import  React, { useState, useEffect } from 'react'
import { BiChevronsDown } from 'react-icons/bi'
import axios from 'axios'
import Card from '../components/card'
import Cards from '../components/cards'


function HomePage(){
const [isMovie,setMovie] = useState()

  useEffect(() => {
    const API_URL=`https://streamo-api.herokuapp.com/?limit=16`
    axios.get(API_URL)
      .then((response) => {
	setMovie(response.data[0].movie_list)
	document.title = "Streamo | Home"
      })

  },[])

	

  return(
    <>
      <Cards heading="Popular Shows" >
    {
      isMovie && isMovie.map(Movie => {
	const title = Movie.post_title
	const thumb = `https://cdn.fmoviesf.me${Movie.image}`
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
  )
}

export default HomePage