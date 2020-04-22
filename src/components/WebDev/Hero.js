import React from 'react';
import { useSpring } from 'react-spring';
import { Header, HeroMain } from './WebDevCSS';

const Hero = () => {


  const fadeIn = useSpring({
    from: {
      trail: 1000,
      opacity: 0,
      transform: "translateY(100px)"
    },
    to: {
      trail: 1000,
      opacity: 1,
      transform: "translateY(0px)"
    }
  })

  return (
    <HeroMain>
        <Header style={fadeIn}>
          <h1>Page one</h1>
        </Header>
    </HeroMain>
  )
}

export default Hero
