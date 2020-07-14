import React from 'react'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>CinemaWorld Movies</h1></center>
          {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.Title}</h6>
                <p class="card-text">{contact.Type}</p>
                <img src={contact.Poster}></img>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts