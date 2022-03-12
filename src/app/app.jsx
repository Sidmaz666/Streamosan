import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import HomePage from './pages/home'
import MoviePage from './pages/movie'
import TvShowPage from './pages/tv'
import Nav from './components/nav'
import Error from './pages/error'
import Contain from './components/contain'
import Search from './pages/search'
import Genre from './pages/genre'
import View from './pages/view'
import Lib from './pages/lib'
import './styles/style.css'

function App() {
  return (
    <>
      <Router>
	  <Nav/>
	    <Contain>
       <Routes>
	      <Route exact path="/" element={<HomePage/>}/>
	      <Route exact path="/movies" element={<MoviePage/>}/>
	      <Route exact path="/tv" element={<TvShowPage/>}/>
	      <Route exact path="/view/:id" element={<View/>}/>
	      <Route exact path="/search/:query" element={<Search/>}/>
	      <Route exact path="/category" element={<Genre/>}/>
	      <Route exact path="/lib" element={<Lib/>}/>
	      <Route path="*" element={<Error/>}/>
       </Routes>
	      </Contain>
	</Router>
      </>
  );
}

export default App;
