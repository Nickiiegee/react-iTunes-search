import React from 'react';

const Result = ({ searchResult, addToFav }) => {

	return (
		<div className="result">
			{searchResult.map((result, index) => (
				<div className="album" key={index}>
          			<img src={result.artworkUrl100} alt={result.artistName} className="zoom" />
					<h1>{result.artistName}</h1>
			    	<h3>{result.trackName}</h3>
					<p hidden="true">{JSON.stringify(index)}</p>
					<button 
     					className="fav"
        				onClick={() => addToFav({ index, artist: result.artistName, track: result.trackName })}
					>
					❤
					</button>
				</div>
			))}
		</div>
	);
};

export default Result;
