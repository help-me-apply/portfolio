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

  margin-top: ${(props: Omit<GreetingProps, 'message'>) => props.marginTop + 'px'};
  margin-bottom: ${(props: Omit<GreetingProps, 'message'>) => props.marginBottom + 'px'};
  margin-left: ${(props: Omit<GreetingProps, 'message'>) => props.marginLeft + 'px'};
  margin-right: ${(props: Omit<GreetingProps, 'message'>) => props.marginRight + 'px'};

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
      marginLeft={marginLeft || 0}
      marginRight={marginRight || 0}
      marginTop={marginTop || 0}
      marginBottom={marginBottom || 0}
    >
      {message}
    </GreetingSpan>
  );
}
