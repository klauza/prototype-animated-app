import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { CardWrapper } from './CardCSS';
import { SmileIcon, SadIcon } from '../../../../media';

function Card() {
  const [flipped, set] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <CardWrapper onClick={() => set(state => !state)}>
      <animated.div className="c back" style={{ background: `url(${SadIcon}) no-repeat`, backgroundPosition: "center", opacity: opacity.interpolate(o => 1 - o), transform }} />
      <animated.div className="c front" style={{ background: `url(${SmileIcon}) no-repeat`, backgroundPosition: "center", opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </CardWrapper>
  )
}

export default Card;