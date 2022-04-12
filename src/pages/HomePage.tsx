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

const typing = keyframes`
 from { width: 0 }
  to { width: 100% }
`;

const caret = keyframes`
from, to { border-color: transparent }
  50% { border-color: black; }
`;

const TypeWriter = styled.span`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  font-family: 'Satisfy', cursive;
  font-weight: 600;
  text-transform: uppercase;
  animation: ${typing} 3.5s steps(20, end), ${caret} 1s steps(1) infinite;
`;

document.addEventListener('DOMContentLoaded', function (event) {
  // array with texts to type in typewriter
  var dataText = ['UI/UX design.', 'Full stack Webdevelopment.'];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text: string, i: number, fnCallback: Function, preI: number = 0) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      const element = document.getElementById('typing');
      if (element) {
        element.innerHTML = text.substring(0, i + 1);
      }

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback, preI);
      }, 100);
    }

    // text finished, then typing backwards
    else if (i === text.length && i + 1 - preI > 0) {
      const element = document.getElementById('typing');
      if (element) {
        element.innerHTML = text.substring(0, i - preI);
      }

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i, fnCallback, preI + 1);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback === 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i: number) {
    if (typeof dataText[i] === 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 1000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

export default function HomePage() {
  return (
    <div>
      <Container>
        <PortaitDisplay />

        <RightContainer>
          <Greeting message="HELLO" marginLeft={20} />
          <br />
          <div>
            I DO &nbsp;<TypeWriter id="typing">hello world</TypeWriter>
          </div>
        </RightContainer>
      </Container>
    </div>
  );
}
