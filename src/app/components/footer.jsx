import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Footer(){
  return (
    <div className="w-full p-2
      flex flex-col  
      justify-center items-center
      text-[#80DEEA] font-semibold 
      bg-gradient-to-r from-[#1b343d] to-[#172429]">
	<h1 
	  className="text-[0.70rem]"
	>
	  Copyleft © 2022 <span className="text-white"><Link to="/">Streamo</Link></span>. All Rights Reserved By a Third-Party.
	</h1>
      <h1 className="flex " >
      Coded By ~ 
      <a 
	className="flex items-center space-x-3" 
      	href="https://github.com/sidmaz666"> 
      <span>
      Sidmaz666
      </span>
      <FaGithub/>
      </a>
      </h1>
    </div>
  )
}

export default Footer
