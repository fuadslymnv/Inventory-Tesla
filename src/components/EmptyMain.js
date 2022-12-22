import React from "react";
import styled from "styled-components";

export default function EmptyMain() {
  return (
    <div className="container">
      <Text>
      Your Tesla Inventory is empty now, please buy tesla products to fill it
      </Text>

    </div>
   
   
  );
}

const Text = styled.div`
margin-top: 64px;
margin-left: 20px;
width: 861px;
height: 116px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
color: rgba(0, 0, 0, 0.5);


`