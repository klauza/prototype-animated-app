import React from 'react';
import { AbsoluteWrapper } from '../reusable';
import Swipe from 'react-easy-swipe';
import { useSpring } from 'react-spring'
import ModalForm from '../ModalForm';
import './circularMenu.scss';
// import { isMobile } from 'react-device-detect';

// redux
import { connect } from 'react-redux';
import { update_Subpage_Id } from '../../actions/routesActions';

// index pages
import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';

// CSS
import { ExternalWrapper } from './HomeCSS';


const Home = ({update_Subpage_Id, general: {routes}}) => {

  const [open, setOpen] = React.useState(true);
  // const [secondOpen, setSecondOpen] = React.useState(false);

  // Modal form
  // const [modalDelay, setModalDelay] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  // scrolling
  const [index, setIndex] = React.useState(routes.home);  // read index from Redux
  const [blockSwipe, setBlockSwipe] = React.useState(false);


  // const initPage = useSpring({ 
  //   height: open ? '100vh' : "0vh"
  //   // config: { duration: 250 } 
  // });

  // const closePage = useSpring({ 
  //   height: "0vh"
  //   // config: { duration: 250 } 
  // });



  const propsHero = useSpring({ height: index===0 ? "100vh" : "0vh", opacity: index===0 ? "1" : "0" });
  const propsAbout = useSpring({ height: index===1 ? "100vh" : "0vh", opacity: index===1 ? "1" : "0" });
  const propsContact = useSpring({ height: index===2 ? "100vh" : "0vh", opacity: index===2 ? "1" : "0" });
  
  // console.log(index);

  const toggleOpen = () => {
    setOpen(!open);

    setTimeout(()=>{
      // setSecondOpen(!secondOpen);
    }, 500)
  }

  const openModalForm = () => {
    // setModalDelay(true);
    setModal(!modal);
  }

  // PC SWIPE/mouse-SCROLL
  const handleScroll = (e) => {
    let direction;

    // detect if firefox
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
      direction = -e.deltaY;
    } else{
      direction = e.nativeEvent.wheelDelta;
    }
   
    if(!blockSwipe){
      // next, going down
      if(direction < 0 && index < 2){
        toggleOpen();
        blockFromSwipe(true); 
        
        setIndex(prevState => prevState+1);

        // set current page
        update_Subpage_Id({...routes, home: index+1});
      }
     // prev, going up
      if(direction > 0 && index > 0){
        toggleOpen();
        blockFromSwipe(true); 
        
        setIndex(prevState => prevState-1);

        // set current page
        update_Subpage_Id({...routes, home: index-1});
      }
    } else{
      return;
    }
  }

  // MOBILE SWIPE
  const onSwipeMove = (position, event) => {
    // console.log(position);
    if(!blockSwipe){
      // next, going down
      if(position.y < -75 && index < 2){
        toggleOpen();
        blockFromSwipe(true); 

        setIndex(prevState => prevState+1);

        // set current page
        update_Subpage_Id({...routes, home: index+1});
      }
     // prev, going up
      if(position.y > 75 && index > 0){
        toggleOpen();
        blockFromSwipe(true); 
        
        setIndex(prevState => prevState-1);

        // set current page
        update_Subpage_Id({...routes, home: index-1});
      }
    } else{
      return;
    }
  }

  // BLOCK FROM SCROLL
  const blockFromSwipe = () => {
    // block
    setBlockSwipe(true);

    // remove block after 1s
    setTimeout(()=>{
      setBlockSwipe(false);
    }, 1000)
  }

  // const fireCircleMenu = () => {
  //   document.getElementById('circularMenu').classList.toggle('active')
  // }

  return (
    <AbsoluteWrapper>

      <ModalForm modalOpen={modal}/>
  
      
      <Swipe onSwipeMove={onSwipeMove}>
        <ExternalWrapper onWheel={(e)=>handleScroll(e)}>

          {/* <div id="circularMenu" className={`circular-menu ${isMobile ? null : 'active'}`}>

            <a className="floating-btn" onClick={fireCircleMenu}>
              <i className="fa fa-plus">X</i>
            </a>

            <menu className="items-wrapper">
              <a href="#" className="menu-item fa fa-facebook">A</a>
              <a href="#" className="menu-item fa fa-twitter">B</a>
              <a href="#" className="menu-item fa fa-google-plus">C</a>
              <a href="#" className="menu-item fa fa-linkedin">D</a>
            </menu>

          </div> */}

          {/* HERO */}
     
            <Hero 
            index={index}
            propsHero={propsHero} 
            toggleOpen={toggleOpen} />
        


          {/* ABOUT */}
      
            <About 
            index={index}
            propsAbout={propsAbout}
            openModalForm={openModalForm} />
     


          {/* CONTACT */}
          
            <Contact 
              index={index}
              propsContact={propsContact}
            />
     

        </ExternalWrapper>
      </Swipe>
    </AbsoluteWrapper>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, {update_Subpage_Id})(Home)
