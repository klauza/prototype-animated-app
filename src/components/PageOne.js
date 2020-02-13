import React from 'react'
import { AbsoluteWrapper } from './reusable';
import { useSpring, useTrail, animated } from 'react-spring';
import styled from 'styled-components';
import Toggle from './Toggle';

const Wrapper = styled.div`
  min-height: 100vh;
  background: lightsalmon;
  margin-top: 50px;
  h1{
    text-align: center;
    padding-top: 50px;
  }

  .trails-main {
  position: relative;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

`;
const Front = styled(animated.div)`

`;

const PageOne = () => {


  const [toggle, set] = React.useState(false);
  React.useEffect(()=>{
    setTimeout(()=>{
      set(true);

    }, 100)
    return () => {
      set(false);
    }
  }, [])

const items = ['Lorem', 'ipsum', 'dolor', 'asd']
  const config = { mass: 5, tension: 2000, friction: 200 }

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 150,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 150, height: 0 },
  })

  const fade = useSpring({
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
  // const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  // console.log(fade);

  return (
    <AbsoluteWrapper>
      <Wrapper>
        <Front style={fade}>
          <h1>Page one</h1>
        </Front>

        <div className="trails-main" onClick={() => set(state => !state)}>
          <div>
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={items[index]}
                className="trails-text"
                style={{ ...rest, transform: x.interpolate(x => `translate3d(${x}px, ${x}px, 0)`) }}>
                <animated.div style={{ height }}>{items[index]}</animated.div>
              </animated.div>
            ))}
          </div>
        </div>

        {/* <main>
          <Toggle />
        </main> */}
      </Wrapper>
    </AbsoluteWrapper>
  )
}

export default PageOne
