import React from 'react'

function Video(props){
  return (

	    <div className="flex w-full mb-5">
	      <iframe title={props.title}
		src={props.link}
		className="w-full h-[40rem] md:h-[50rem]"
		frameBorder="0"
	        allow="autoplay; fullscreen; picture-in-picture" 
		allowFullScreen>
	      </iframe>
	      </div>
  )
}

export default Video
