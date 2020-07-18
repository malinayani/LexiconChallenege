import React from 'react'
import { Link } from 'react-router-dom'



  const Contacts = ({ cinemaWorld }) => {
      return (
        <div>
          <center><h1 style={{ fontSize: 45, color: 'grey' }}>CinemaWorld Movies</h1></center>
          {cinemaWorld.map((movie) => (
            <div class="card">
              <div class="card-body">

                <button component><img src={movie.Poster} onClick ={() => {
                    const name = 'James';
                    alert('Hello, ', name);
                  }} ></img></button>
            

                <h5 class="card-title" >{movie.Title }</h5>
                <h6 class="card-subtitle mb-2 text-muted" >{movie.Title}</h6>
                <p class="card-text" >{movie.Type}</p> 
                
              </div>
            </div>
          ))}
        </div>
      )
    };

    

    export default Contacts