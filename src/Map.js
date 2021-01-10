import * as React from 'react';
import { useState,useEffect } from 'react';
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import { useDispatch ,useSelector} from 'react-redux'
import {
  selectCenter
} from './reducers/mapSlice';
import {
  selectFeatureCollection,
  getAptFeatures
} from './reducers/buildingSlice';




function Map(props) {

 
  const center = useSelector(selectCenter);
  const features = useSelector(selectFeatureCollection);
  const dispatch = useDispatch()

 

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

 useEffect(() => {
 
  dispatch(getAptFeatures());
 
}, []);

  return (
    <ReactMapGL {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      onClick= { info => console.log('Clicked:', info.features && info.features[0].properties.id)}
   >
          <Source id="my-data" type="geojson" data={features}>
          <Layer
          
            id="point"
            type="circle"
            paint={{
              'circle-radius': 5,
              'circle-color': '#ff652f',
              "circle-stroke-color" : "#796057",
              "circle-stroke-width" : 1
            }} />
              </Source>
    </ReactMapGL>
  );
}

export default Map;