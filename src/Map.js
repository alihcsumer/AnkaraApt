import * as React from 'react';
import { useState,useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { useSelector } from 'react-redux';
import {
  selectCenter,changeCenter
} from './reducers/mapSlice';
import { useDispatch } from 'react-redux'



function Map(props) {

 
  const center = useSelector(selectCenter);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude:center.longitude,
    zoom: center.zoom,
    mapboxApiAccessToken : 'pk.eyJ1IjoiYWxpc3VtZXIiLCJhIjoiY2o2NHVjdHdwMXhlNDMydDZuaDF0ZW5yMCJ9.r0a31QnkobaovXbuGTL3bg'
  });

    useEffect(() => {
         setViewport(state => ({ ...state, latitude:center.latitude,longitude:center.longitude,zoom:center.zoom }));
    }, [center.latitude,center.longitude,center.zoom]);

    useEffect(() => {
     setViewport(state => ({ ...state, width: "100%"}));
    
 }, [props.panelopened]);

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Map;