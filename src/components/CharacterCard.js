import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardSubtitle, CardText } from "reactstrap";


export default function CharacterCard({character}) {

  const {name, status, species} = character;
  return (
  <Card>
    <CardBody>
    <Link to={`/CharacterCard/${character.id}`}>
    
    {/* <div className="character-card"> */}
      <CardHeader>{name}</CardHeader>
      </Link>

      {/* <div className="character-status"> */}
        <CardText>Status:{status}</CardText>
  
      {/* <div className="character-species"> */}
        <CardText>Species:{species}</CardText>
        
    </CardBody>
  </Card>
  );
}
