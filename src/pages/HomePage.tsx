import React from 'react';
import styled, {keyframes} from 'styled-components';
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

const typing = keyframes`0% { width: 0 }
70% {width: 100%}
  100% { width: 100% }`;

const blink = keyframes`
 from { border-color: transparent }
  to { border-color: black; }
`;

const TypedOut = styled.span`
  display: inline-block;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  font-family: 'Satisfy', cursive;
  font-size: 60px;
  font-weight: bold;
  animation: ${typing} 2s steps(30, end) alternate infinite, ${blink} 0.8s infinite;
`;

export default function HomePage() {
  return (
    <div>
      <Container>
        <PortaitDisplay />

        <RightContainer>
          <Greeting message="HELLO" marginLeft={20} />
          <br />
          <h4 style={{fontSize: '60px', textAlign: 'left'}}>
            I DO <TypedOut>hello world</TypedOut>
          </h4>
        </RightContainer>
      </Container>
    </div>
  );
}
