import React, {useEffect} from 'react';
import Routes from './Routes';

// redux
import { connect } from 'react-redux';
import { updt_animation_direction } from './actions/routesActions';

const WrappedRoutes = ({ updateFirstStart, appFirstStart, loc1, loc2, location, updt_animation_direction }) => {


  useEffect(()=>{
    // update left-right direction redux data
    loc1 > loc2 ? updt_animation_direction("right") : updt_animation_direction("left")
  }, [location]);

  return (
    <Routes updateFirstStart={updateFirstStart} appFirstStart={appFirstStart} loc1={loc1} loc2={loc2} location={location} />
  )
}


export default connect(null, {updt_animation_direction})(WrappedRoutes)
