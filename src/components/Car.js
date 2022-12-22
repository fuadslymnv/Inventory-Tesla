import React from "react";
import styled from "styled-components";


export default function Car({name,src}) {
  return (
    <div >
        <Card>
        <img src={src} alt="car" style={{width: "100%"}} />
        <div className="container">
            <b>{name}</b>
        </div>
        </Card>
    </div>
  )
}

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 30%;
border-radius: 5px;
width: 300px;
height: 185px;
border-radius: 10px;
margin-bottom: 25px;

@media (max-width: 1180px) {
    width: 250px;
    height: 160px;
    
`;
