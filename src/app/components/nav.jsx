import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTag , FaThList , FaPlay, FaSearch, FaVideo } from 'react-icons/fa'
import { RiTvFill } from "react-icons/ri";


function Nav(){

  const [isMenu,setMenu] = useState(false)
  
  const ToggleMenu = () => {
	setMenu(!isMenu)
  };

  let redirect = useNavigate()

  const submitSearch = () => {

    if(document.getElementById('searchInput').value !== ""){
    
    redirect(`/search/${document.getElementById('searchInput').value}`)
    document.getElementById('searchInput').value = ""


    }

    ToggleMenu()
    	
  };

  const HandleKey = (e) => {
   
    if(document.getElementById('searchInput').value !== ""){
    if(e.code === "Enter"){
      submitSearch()
    }	

    } 
  }
	



  return (
    <header className="fixed w-screen z-50">
	<nav 
	  className="bg-[#21262e] bg-opacity-95 backdrop-blur-sm 
	  text-[#B2EBF2] font-semibold
	  items-center 
	  md:flex md:justify-between 
	  md:pl-5 p-2 md:pr-5"
		>
	  <div className="flex justify-between  p-1">
	    <Link
	      onClick={() => setMenu(false)}
	      to="/">
	    <span>
	      <FaPlay 
	      className="
	      text-[#d0ebf5]
	      transition ease-out duration-200
	      hover:text-[#a6d1e0]
	      "/>
	    </span>
	    </Link>
	    <button 
	      className="md:hidden
	      focus:outline-none"
	      onClick={ToggleMenu}>
	      <FaBars 
	      className="
	      transition ease-out duration-300
	      hover:text-[#a6d1e0] text-[#EEEEEE]"/>
	    </button>
	  </div>
	  <ul 
	    className={`text-center text-xl space-y-3
	    md:flex md:items-center  md:space-y-0 md:mr-1 
	    md:space-x-5 xl:text-2xl
	    ${isMenu ? 'block' : 'hidden' }`}>
	  <li>
	    <div className="flex items-center justify-center">
		<input
		  onKeyUp={HandleKey}
		id="searchInput"
	      	type="text"
		  className="pl-1 font-semibold 
		  w-32 md:w-full text-[#B2EBF2] placeholder-[#B2EBF2]
		  transition ease-in-out duration-500 focus:bg-[#607D8B50]
		  focus:outline-none bg-[#37474F80]"
		  placeholder="...Search"
		  required
	      	/>
	      <button 
	      onClick={submitSearch}
	      name="searchBtn"
	      className=" p-1
		bg-[#455A6490]
		focus:outline-none hover:bg-[#546E7A90]">
	      <FaSearch/>
	      </button>
	    </div>
	  </li>
	    <li>
	    <Link
	      onClick={ToggleMenu}
	      className="
	      bg-[#37474F90] p-1 rounded flex justify-center  items-center 
	      space-x-3 md:space-x-2 
	      hover:bg-transparent hover:text-[#EC407A]" 
	      to="/movies">
	    <FaVideo/>
	      <span className="whitespace-nowrap">
		Movies
	    </span>
	    </Link>
	    </li>
	    <li>
	      <Link
	      onClick={ToggleMenu}
		className="
	      bg-[#37474F90] p-1 rounded flex justify-center items-center 
	      space-x-3 md:space-x-2  
	      hover:bg-transparent hover:text-[#EC407A]" 
	       to="/tv">
	    <RiTvFill/> 
		<span  className="whitespace-nowrap">
	    TV Shows
		</span>
	    </Link>
	    </li>
	    <li>
	    <Link
	      onClick={ToggleMenu}
	      className="
	      bg-[#37474F90] p-1 rounded flex justify-center items-center 
	      space-x-3 md:space-x-2 
	      hover:bg-transparent hover:text-[#EC407A]" 
	    to="/category">
	    <FaTag/>
	      <span>
	      Genre
	      </span> 
	    </Link>
	    </li>
	    <li>
	    <Link
	      onClick={ToggleMenu}
	      className="
	      bg-[#37474F90] p-1 rounded flex justify-center  items-center 
	      space-x-3 md:space-x-2 
	      hover:bg-transparent hover:text-[#EC407A]" 
	      to="/lib">
	    <FaThList/>
	      <span style={{whiteSpace : "nowrap" }}>
	    A-Z
	      </span>
	    </Link>
	    </li>
	</ul>

	</nav>
    </header>
  )


}

export default Nav
