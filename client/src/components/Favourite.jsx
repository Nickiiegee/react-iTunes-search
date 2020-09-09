import React from 'react';

export default ({ favourite, removeFromFav }) => {

  return (
    <>
      <div className="favourites">
          <button 
            className="btn btn-secondary dropdown-toggle" 
            type="button" id="favouriteButton" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
          >
          Favourites:
          </button>

          {favourite.length === 0 ? (<p>No Favourites Yet</p>) : (
            <>
            {favourite.map((fav) => (
              <div className="dropdown-menu" aria-labelledby="favouriteButton">
                <p>{JSON.stringify(fav)}</p>
                <button onClick={() => removeFromFav(fav.index)}>
                <span role="img" aria-label="Delete row">
                  ❌
                </span>
              </button>
              </div>
            ))}
            </>
          )}
         
      </div>
    </>
  );

}
