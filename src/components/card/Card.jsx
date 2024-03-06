import React from 'react';
import '../card/Card.css';
function CharacterCard({ personaje }) {
  return (
    <div className="card">
      <h2 className="claseNombres">{personaje.name}</h2>
      <h6 className="status"><span className="span">Status:</span>{personaje.status}</h6>
      <h6 className="gender"><span className="span">Gender:</span>{personaje.gender}</h6>
      <h6 className="location"><span className="span">Location:</span>{personaje.location.name}</h6>
      <img className="img" src={personaje.image} alt={personaje.name} />
    </div>
  );
}

export default CharacterCard;