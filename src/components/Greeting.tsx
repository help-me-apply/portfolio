import React from 'react';
import styled from 'styled-components';

const GreetingSpan = styled.span`
  background: #4c84ff;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 3px 10px;
  position: relative;
  line-height: 26px;

  margin-top: ${({marginTop}: {marginTop: number}) => marginTop + 'px'};
  margin-bottom: ${({marginBottom}: {marginBottom: number}) => marginBottom + 'px'};
  margin-left: ${({marginLeft}: {marginLeft: number}) => marginLeft + 'px'};
  margin-right: ${({marginRight}: {marginRight: number}) => marginRight + 'px'};

  &:after {
    position: absolute;
    content: '';
    bottom: -10px;
    left: 5px;
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-left: 10px solid #4c84ff;
    border-bottom: 10px solid transparent;
  }
`;

interface GreetingProps {
  message: string;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
}

export default function Greeting({
  message,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}: GreetingProps) {
  return (
    <GreetingSpan
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {message}
    </GreetingSpan>
  );
}
