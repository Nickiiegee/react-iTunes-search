import React, { useState } from 'react';
import axios from 'axios';

// import icons from fontawesome
import { FaSearch } from 'react-icons/fa';

// import custom components
import Result from './Result';
import Favourite from './Favourite';

export default () => {
  const [ query, setQuery ] = useState('');
	const [ type, setType ] = useState('');
	const [ data, setData ] = useState([]);
  const [ favs, setFavs ] = useState([]);

  // get data from api
	const getData = () => {
		axios
			.get(`/search/${query}/${type}`)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
  };

  // add an object to favourites
	const addToFav = (fav) => {
		setFavs([ ...favs, fav ]);
  };

  // Remove from favs array
  const removeFromFav = index => {
    const newFavsArray = favs.filter(fav => fav.index !== index);
    setFavs(newFavsArray);
  }

  return (
		<div>
			<form className="App-header">
        {/* imported custom component with props */}
        <Favourite favourite={favs} removeFromFav={removeFromFav} />
        
        {/* user search input */}
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          name="query" 
          className="search-bar" 
          onChange={(e) => setQuery(e.target.value)} 
        />

        {/* dropdown menu */}
        <div className="dropdown">
          <button 
            className="btn btn-secondary dropdown-toggle" 
            type="button" id="dropdownMenuButton" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
            {type === "" ? "Type" : type}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#1" key="1" onClick={() => setType('musicTrack')}>music</a>
            <a className="dropdown-item" href="#2" key="2" onClick={() => setType('movie')}>movie</a>
            <a className="dropdown-item" href="#3" key="3" onClick={() => setType('podcast')}>podcast</a>
            <a className="dropdown-item" href="#4" key="4" onClick={() => setType('shortFilm')}>shortFilm</a>
            <a className="dropdown-item" href="#5" key="5" onClick={() => setType('ebook')}>ebook</a>
          </div>
        </div>
        
        {/* Search button */}
        <input 
          className="submit"
          type="button" 
          value="🔍 Search" 
          onClick={getData} 
        />
			</form>

      {/* imported custom component with props */}
      <Result searchResult={data} addToFav={addToFav} />
		</div>
	);
}
