import BuildInfoCard from "./BuildInfoCard"
import BuildPhoto from "./BuildPhoto"
import {Fragment,useState,useEffect} from 'react';
import YandexPanorama from "./Panorama"

import { useSelector} from 'react-redux'

import {
  selectSingleApt
} from './reducers/buildingSlice';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 





function InfoPanel(props) {

    const buildingobject = useSelector(selectSingleApt);

    const [imageselected,setLightBox] = useState({lightbox:false,index : -1});

    // let buildingobject = {
    //     photos :['https://pbs.twimg.com/media/EoyAHytXYAExZT0?format=jpg&name=360x360',
    //     'https://pbs.twimg.com/media/EoyAJoNXcAAGjkB?format=jpg&name=small',
    //     'https://pbs.twimg.com/media/EoyALoIXEAApByn?format=jpg&name=360x360',
    //     'https://pbs.twimg.com/media/EoyANRUXMAAKXDe?format=jpg&name=360x360'],
    //     name : "Çam Apartmanı",
    //     address : "Şehit Erdönmez Sokak No:8"
     
    //      };

  useEffect(()=>{
      if(buildingobject)
    {props.setOpen(true);}
   
  },[buildingobject])


  

   const renderLightBox = () => {
       if(imageselected.lightbox)
       {

        const images = buildingobject.images;
        const index = imageselected.index;

          return(

            <Lightbox
            mainSrc={images[index]}
            nextSrc={images[(index + 1) % images.length]}
            prevSrc={images[(index + images.length - 1) % images.length]}
            onCloseRequest={()=>{setLightBox(state => ({...state,lightbox:false, index: index}))}}
            onMovePrevRequest={() =>

              setLightBox(state => ({...state, index: (index + images.length - 1) % images.length}))
            }
            onMoveNextRequest={() =>
              setLightBox(state => ({...state, index: (index + images.length - 1) % images.length}))
            }
          />
          );

       }
   }


    const renderBuildInfo = () => {
      
        if(buildingobject && (props.panelopened||imageselected.panelopened))
        {
        return (
            <div className="buildinfo">
            <BuildInfoCard buildingName={buildingobject.name.length == 0?"Ankara Apartmanları":buildingobject.name} address={buildingobject.sokak + buildingobject.no } />
                 <div className="buildphotos">
             
                 {
                
                 buildingobject.images.map((item,index)=>{
                                    return <BuildPhoto onClick={()=>{setLightBox(state => ({...state,lightbox:true, index: index}))}} key={index} src={item}/>
               })}
                
                {renderLightBox()}
              
                 </div>
             </div>
          
        );
        
            }
    }
       

    return (
 <>
<div className= {props.panelopened  ? 'infocontainer open': "infocontainer"}>
   <div class="infocontainer_arrow">
       <a href="#!">
           <i class="fas fa-chevron-left" onClick={() => { props.setOpen(!props.panelopened); }}></i>
       </a>
       
   </div>
   
{renderBuildInfo()}

 <div class="yandexcard">
 {buildingobject && (props.panelopened||imageselected.panelopened) && <YandexPanorama building={buildingobject}></YandexPanorama>}
 </div>
</div>
</>
    );
}

export default InfoPanel;