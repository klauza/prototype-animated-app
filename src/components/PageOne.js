import React from 'react'
import { AbsoluteWrapper } from './reusable';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Toggle from './Toggle';


const Front = styled(animated.div)`
  background: yellow;
`;

const PageOne = () => {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })
  // const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  console.log(fade);

  return (
    <AbsoluteWrapper>
      <Front style={fade}>
        1
      </Front>
      <main>
        <Toggle />
      </main>
    </AbsoluteWrapper>
  )
}

export default PageOne
