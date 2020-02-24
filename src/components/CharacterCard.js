import React from "react";
import { Link, Card } from "react-router-dom";


export default function CharacterCard({character}) {

  const {name, status, species} = character;
  return <Card>
    <Card.Body>
    <Link to={`/CharacterCard/${character.id}`}>
    
    {/* <div className="character-card"> */}
      <Card.Title>{name}</Card.Title>

      {/* <div className="character-status"> */}
        <Card.Subtitle>Status:{status}</Card.Subtitle>
  
      {/* <div className="character-species"> */}
        <Card.Subtitle>Species:{species}</Card.Subtitle>
  
    </Link>
    </Card.Body>
  </Card>;
}
