import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import Aboutview from './components/Aboutview';
import Movieview from './components/Movieview';
import Searchview from './components/Searchview';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';


function App() {

  const[searchResults, setSearchResults]=useState([]);
  const[searchText, setSearchtext]=useState('');

  useEffect(()=>{
    if (searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(Response => Response.json())
    .then(date =>{setSearchResults(date.results)
    })
  
  }
  else{
    console.log("invalid input")
  }
},[searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchtext={setSearchtext}/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about'  element={<Aboutview/>}/>
        <Route path='/search' element={<Searchview keyword={searchText} searchResults={searchResults}/>}/>
        <Route path="/movies/:id" element={<Movieview/>}/>
        </Routes>
    </div>
  )
}

export default App;

