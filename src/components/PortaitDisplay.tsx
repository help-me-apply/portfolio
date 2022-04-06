import React from 'react';
import styled from 'styled-components';
import picture from '../assets/alina.jpg';

const PortaitContainer = styled.div`
  width: 570px;
  height: 720px;
  border-radius: 10px;
  background: rgb(2, 0, 36);
  background: linear-gradient(60deg, #4c84ff 58%, rgba(255, 255, 255, 1) 58.2%);
  display: grid;
  place-items: center;
  box-shadow: 0px 0px 20px 0px rgb(0 37 93 / 15%);
`;

const InnerContainer = styled.img`
  width: 510px;
  height: 650px;
`;

export default function PortaitDisplay() {
  return (
    <PortaitContainer>
      <InnerContainer src={picture}></InnerContainer>
    </PortaitContainer>
  );
}
