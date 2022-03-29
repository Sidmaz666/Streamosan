import React, { useState, useEffect } from 'react'
import Cards from '../components/cards'
import Card from '../components/card'
import axios from 'axios'
import { BiChevronsDown } from 'react-icons/bi'
import{TailSpin} from 'react-loader-spinner'


function Lib(){
 
 
  const [isPage,setPage] = useState(1)
  const Random = Math.floor(Math.random() * (36 - 0 + 1)) + 0
  const [isLib,setLib] = useState(Random)
  const [isLoad,setLoad] = useState()
  const [isSpin,setSpin] = useState(true)
  const options = "0123456789abcdefghijklmnopqrstuvwxyz"
		  const opt = []
		  for(let x=0; options.length > x; x++){
		    const title = options[x]
		    opt.push({
		    	title		
		    })
		  }

 
  useEffect(() => {   
    const API_URL = `https://streamo-api.herokuapp.com/lib/${isLib}?page=${isPage}`
    axios.get(API_URL)
      .then((response) => {

	setLoad(response.data.result)
	setSpin(false)
      })
    
  },[isPage,isLib])

  console.log(isLoad)

  return (
    <>
            { isSpin ? <><br/>
	<TailSpin
 	 ariaLabel="loading-indicator"
	  height={100}
	  width={1000}
	  color="#B2EBF2"
	/>
	  <br/>
	</> : <>

      <Cards heading="Library : Find A-Z">
	      <div className="p-2 mb-3  bg-[#37474F30]">
		{
		  opt.map(lib => {
		    return (
			<button
		    onClick={ () => {
				setLib(lib.title)
			} }
			key={lib.title}
			className="bg-[#37474F90] text-white
			pl-5 pr-5 p-1 m-1 text-xl
			rounded-xl
			font-bold
			hover:text-[#84FFFF]	
			"
			>
		      { lib.title.toUpperCase() }
		</button>

		    )
		})
		}
			<button
		    onClick={ () => {
				setLib("0-9")
			} }
			key="0-9"
			className="bg-[#37474F90] text-white
			pl-5 pr-5 p-1 m-1 text-xl
			rounded-xl
			font-bold
			hover:text-[#84FFFF]	
			"
			>
		      0-9
		</button>
	    </div>

	{
	  isLoad && isLoad.map(movie => {
	const title = movie.title
	const type = title.includes("Season") ? 2 : 1
	const thumb = movie.thumb
	const rate = movie.rating
	const quality = movie.quality
	const year = movie.year
	const media_id = movie.media_id

	return (
	  <Card thumb={thumb} title={title}
      		 key={title} rate={rate} 
		media_id={media_id} time="Some Time"
      		quality={quality} year={year} type={type} />
		
	)


	})
      }


      <button 
	onClick={ () => setPage(isPage + 1) }
	className=" flex justify-center items-center
	  bg-gradient-to-r from-[#142d38] to-[#0f1d24] 
	  text-[#78909C] font-semibold w-full pb-2 text-xl
	transition ease-in-out duration-200
	focus:outline-none hover:text-[#80DEEA]
	">
	  <BiChevronsDown className="text-3xl animate-pulse "/>
	  Load More
      </button>

      </Cards>
    </>
	    }
    </>
  )

}

export default Lib
