import React, { useState } from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import { Header, HeroMain } from './WebDevCSS';

const Hero = () => {

  const [fade, setFade] = useState(false);

  React.useEffect(()=>{
    setFade(true);
  }, []);


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
