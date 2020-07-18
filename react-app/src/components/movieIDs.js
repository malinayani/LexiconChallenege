import React from 'react'

    const MovieID = ({ id }) => {
      return (
        <div>
        <center><h1 style={{ fontSize: 45, color: 'grey' }}>ID Numbers</h1></center>
        {id.map((number) => (
          <div class="card">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">{number}</h6>
              <p class="card-text">{id.length}</p>
            </div>
          </div>
        ))}
      </div>
      )
    };

    export default MovieID