import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <div className="container">
      
      <Wrapper>
      <WelcomeText>Welcome, Afgan Abbas</WelcomeText>

      <a className="logo">
      <svg  viewBox="0 0 245 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.81665 0.623377C1.13265 2.05911 1.76374 3.36725 2.64434 4.41189C3.52495 5.45653 4.62294 6.19955 5.82423 6.56376H13.6432L14.0438 6.75236V30.3938H18.9226V6.78661L19.3661 6.59801H27.1922C28.3896 6.22402 29.4832 5.4777 30.3626 4.43459C31.2419 3.39147 31.8757 2.08856 32.1998 0.657681V0.597653H0.816675V0.623377H0.81665ZM171.51 0.589106H166.646V30.4624H188.922C189.978 29.9729 190.917 29.1809 191.658 28.1558C192.398 27.1307 192.918 25.9036 193.172 24.582H171.496L171.51 0.589106ZM134.075 6.46946C136.665 5.61224 138.839 3.19497 139.362 0.571978L112.106 0.623377V18.2388H134.404V24.4363H116.906C115.572 24.8506 114.327 25.5998 113.253 26.6342C112.179 27.6687 111.3 28.9648 110.676 30.4367H139.211V12.3756H116.921V6.46948H134.075V6.46946ZM217.179 30.4452H222.015V18.4273H239.599V30.4452H244.428V12.427L217.179 12.3927V30.4452L217.179 30.4452ZM61.8732 6.53804H80.4727C81.6912 6.1868 82.8058 5.44154 83.6951 4.38347C84.5844 3.32541 85.2143 1.99515 85.5161 0.537659H56.8299C57.1346 1.99346 57.7654 3.32185 58.6542 4.37936C59.5431 5.43687 60.6561 6.1833 61.8732 6.53804ZM61.8732 18.3416H80.4727C81.6905 17.9886 82.8043 17.2428 83.6934 16.185C84.5825 15.1272 85.2128 13.7979 85.5161 12.3413H56.8299C57.136 13.7962 57.7673 15.1237 58.6559 16.1809C59.5445 17.2381 60.6568 17.9851 61.8732 18.3416ZM61.8732 30.4624H80.4727C81.6905 30.1094 82.8043 29.3635 83.6934 28.3057C84.5825 27.2479 85.2128 25.9186 85.5161 24.462H56.8299C57.1353 25.9174 57.7664 27.2453 58.6551 28.3027C59.5438 29.36 60.6565 30.1068 61.8732 30.4624ZM221.479 6.55516H240.078C241.298 6.20443 242.413 5.45949 243.304 4.40147C244.194 3.34346 244.826 2.01292 245.129 0.554786H216.435C216.739 2.01143 217.369 3.34075 218.258 4.39854C219.147 5.45632 220.261 6.20217 221.479 6.55516Z" fill="black" stroke="black"/>
</svg>
      </a>
    </Wrapper>

    
     
    </div>
   
   
  );
}

const Wrapper = styled.div`

@media (max-width: 1180px) {
  width: 93%;
  padding: 0 0px;
};

@media (max-width: 768px) {
  width: 100%;
  height: 50px;
  padding: 0 0px;
}

  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
border-bottom:1px solid black;
  .logo {
    margin-left: 30px;

    @media (max-width: 768px) {
      margin-left: -30px;
      width: 200px;
      height: 21px;
      margin-right: 0px;
      min-height: 30px;

  }

  svg {
    width: 200px;
    height: 41px;

     @media (max-width: 768px) {
      width: 100px;
      height: 28px;
  };
}

  @media (max-width: 1180px) {
    width: 200px;
    height: 30px;
  }


`;

const WelcomeText = styled.h1`
width: 500px;
height: 35px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 42px;
color: #000000;
line-height: 40px;

@media (max-width: 1180px) {
  font-size: 28px;
  width: 380px;
  height: 15px;
  line-height: 16px;
};


@media (max-width: 768px) {
  font-size: 18px;
  width: 260px;
  height: 15px;
  line-height: 10px;
}
`;

