import React from 'react';
import Swipe from 'react-easy-swipe';
// import {
//   MobileView,
//   isMobile
// } from "react-device-detect";


const SwipeMobile = ({ children }) => {
  const [blockSwipe, setBlockSwipe] = React.useState(false);

  React.useEffect(()=>{
    
  }, [blockSwipe])

  const onSwipeMove = (position, event) => {
    if(!blockSwipe && ( (Number(position.x) >= 100) || (Number(position.x <= -100)) )){
      console.log(`Moved ${position.x} pixels horizontally`, event);
      
      // next
      if(position.x < 0){
        // if(index > 2) return;
        console.log('swipe right');
        // setIndex(prevState => prevState + 1);
        blockFromSwipe(true); // block moving for next 1 second
      }
     // prev
      if(position.x > 0){
        // if(index < 1) return;
        console.log('swipe left');
  
        // setIndex(prevState => prevState - 1);
        blockFromSwipe(true); // block moving for next 1 second
      }
    } else{
      return;
    }
  }

  const blockFromSwipe = () => {
    // block
    setBlockSwipe(true);

    // unblock after 1s
    setTimeout(()=>{
      setBlockSwipe(false);
    }, 1000)
  }

  return (
    <Swipe onSwipeMove={onSwipeMove}>
      {children}
    </Swipe>
  )
}

export default SwipeMobile
