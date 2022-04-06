import React from 'react';
import styled from 'styled-components';
import PortaitDisplay from '../components/PortaitDisplay';
import Greeting from '../components/Greeting';

const Container = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background: pink; */
  padding-right: 15px;
  padding-left: 15px;
`;

const RightContainer = styled.div`
  width: 570px;
  height: 720px;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export default function HomePage() {
  return (
    <div>
      <Container>
        <PortaitDisplay />

        <RightContainer>
          <Greeting message="HELLO" marginLeft={20} />
          <br />
          <div>I'am John Smith </div>
        </RightContainer>
      </Container>
    </div>
  );
}
