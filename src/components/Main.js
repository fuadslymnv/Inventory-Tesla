import React from "react";
import styled from "styled-components";
import Car from "./Car";
export default function Main() {
  return (
    <div className="container">
      <Text>Your Tesla Inventory</Text>
      <CarContainer>
        <Car
          name="Model 3"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
        />
        <Car
          name="Model S"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/56cb8c41-e898-44ce-b6b7-fe9b9a05f529/bvlatuR/std/1200x628/MS-Social"
        />

        <Car
          name="Model X"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3863f3e5-546a-4b22-bcbc-1f8ee0479744/bvlatuR/std/1200x628/MX-Social"
        />

        <Car
          name="Model Y"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8bdb0faa-e77a-4072-aabd-0bb2e0a2454e/bvlatuR/std/1200x628/Model-Y-Social-Global?quality=auto-medium&format=auto"
        />
      </CarContainer>
    </div>
  );
}

const Text = styled.div`
  margin-top: 40px;
  margin-left: 25px;
  width: 500px;
  height: 116px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: rgba(0, 0, 0, 0.5);
  @media (max-width: 1180px) {
    display: flex;
    margin-top: 10px;
      font-size: 28px;
      width: 100%;
      height: 100%;
      margin-bottom:10px;
        text-align: start;
    };

    @media (max-width: 768px) {
        font-size: 22px;
        width: 100%;
        height: 100%;
    }
`;

const CarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 70px;
  width: 91%;


@media (max-width: 1180px) {
    margin: 25px;
    width: 90%;
};

@media (max-width: 768px) {
    margin: 0 65px;
    flex-direction: column;
    width: 100%;
}
`;
