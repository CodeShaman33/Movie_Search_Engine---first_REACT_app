
import React from 'react';

const Card = ({movie}) => {
    return (
        <div className="card">
            <div className="year">
                {movie.Year}
            </div>

            <div className="poster">
                <img 
                src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/150"
                  }
                  alt="poster"/>
            </div>

            <div className="type">
                {movie.Type}
            </div>

            <div className="title">
                {movie.Title}
            </div>
        </div>
    )
}


export default Card;