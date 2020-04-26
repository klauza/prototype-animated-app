import React, { useEffect, useRef } from 'react';
import { ContentWrapper } from './DeisngCSS';

const Content = ({ id, contentTopPosition }) => {

  // const contentTopPosition = useRef();

  useEffect(()=>{
    contentTopPosition.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [])

  return (
    <ContentWrapper ref={contentTopPosition}>
      This is content with no. {id}
      <p>Suspendisse quis dapibus eros. Nullam condimentum, magna id condimentum accumsan, massa lectus pellentesque arcu, eget interdum mauris purus non diam. Nulla laoreet, diam id dictum ultricies, diam metus faucibus libero, sit amet laoreet diam nibh ac quam. Proin fringilla tempor purus. Nam faucibus lacus vel magna sollicitudin, in congue arcu ornare. In accumsan purus ac metus mattis rutrum. Praesent vel est eu turpis congue suscipit vitae et tortor. Sed convallis lectus ac varius volutpat. Quisque a porttitor turpis, ut dignissim odio. Cras risus sapien, pulvinar sed turpis quis, posuere pretium augue. Vestibulum feugiat turpis eu nunc fringilla accumsan. Aenean at felis eu dui facilisis faucibus. Vestibulum porttitor justo velit, congue sodales justo facilisis id. Phasellus risus odio, maximus luctus porttitor eu, laoreet non arcu.</p>
    </ContentWrapper>
  )
}

export default Content
