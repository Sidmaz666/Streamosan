import react from 'react'
import { useNavigate } from 'react-router-dom'
import { FaInfoCircle  } from "react-icons/fa";

function Card(props){
  let view = useNavigate()
  return (
    <>
	<div 
	  onClick={() => {
	    view(`/view/${props.media_id}`, { state : { title: props.title, rate: props.rate , quality:  props.quality, duration: props.time, desc: props.desc, type: props.type, vlink: props.vlink }})
	  }}
	className="bg-[#0b1724] max-w-xs m-1 mb-5 
	  rounded overflow-hidden
	  cursor-pointer
	  hover:bg-[#0b172480]
	  hover:shadow-xl
	  group
	  md:hover:transition ease-in duration-100 ease-out
	  md:hover:max-w-[22rem]
	  " 	
	key={props.title}>
        <img src={props.thumb}
	  alt={props.title}
	  className="w-[400px] h-[300px] md:h-min "/>
	<div className="px-4 py-2">
	      <div className="font-bold text-xl text-[#B2EBF2] mb-1">
		{props.title}
	      </div>
	      <div className="font-bold text-lg text-[#C6FF00] mb-1">
		<span className="text-[#78909C]">
		Rating: </span>
		{props.rate > 0 && props.rate || 'Unknown'  }
	      </div>
		


	      <div className="font-bold text-lg group-hover:flex  hidden md:flex  text-[#00C853] mb-1">
		<span className="text-[#78909C]">
		Quality: </span>
		<span className="pl-1">
		{props.quality || 'Unknown' }
		</span>
	      </div>
	  <div className="font-bold group-hover:flex  hidden md:flex text-lg  text-[#4DD0E1] mb-1">
		<span className="text-[#78909C]">
		Duration: </span>
	    <span className="pl-1">
		{props.time || 'Unknown' }
	    </span>
	      </div>
	  <div className="font-bold text-lg group-hover:flex  hidden md:flex  text-[#F06292] mb-1">
		<span className="text-[#78909C]">
		Year: </span>
	    <span className="pl-1">
		{props.year || 'Unknown' }
	    </span>
	      </div>
	      <div className="font-bold text-lg  text-[#4DD0E1] mb-1">
		<span className="text-[#9C27B0] bg-[#455A6460]
		  rounded-md p-[0.10rem] pl-1 pr-1 ">
		  {props.type == 2 && "TV Show" || props.type == 1 && "Movie" || "Image" }
		</span>

	      </div>
	<p className="text-[#B2EBF270] text-base 
	  overflow-hidden 
	  overflow-ellipsis
	  whitespace-nowrap
	  md:whitespace-normal
	  ">
	  { props.desc }
	</p>
	</div>
      </div>

    </>

  )
}


export default Card
