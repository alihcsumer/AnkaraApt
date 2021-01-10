import BuildInfoCard from "./BuildInfoCard"
import BuildPhoto from "./BuildPhoto"

import { useState,useEffect } from 'react';

import { useSelector} from 'react-redux'

import {
  selectSingleApt
} from './reducers/buildingSlice';






function InfoPanel(props) {

    const buildingobject = useSelector(selectSingleApt);

    // let buildingobject = {
    //     photos :['https://pbs.twimg.com/media/EoyAHytXYAExZT0?format=jpg&name=360x360',
    //     'https://pbs.twimg.com/media/EoyAJoNXcAAGjkB?format=jpg&name=small',
    //     'https://pbs.twimg.com/media/EoyALoIXEAApByn?format=jpg&name=360x360',
    //     'https://pbs.twimg.com/media/EoyANRUXMAAKXDe?format=jpg&name=360x360'],
    //     name : "Çam Apartmanı",
    //     address : "Şehit Erdönmez Sokak No:8"
     
    //      };

    const renderBuildInfo = () => {
        if(buildingobject && props.panelopened)
        {
        return (
            <div class="buildinfo">
            <BuildInfoCard buildingName={buildingobject.name + " " + buildingobject.id} address={buildingobject.sokak + buildingobject.no  } />
                 <div class="buildphotos">
             
                 {
                
                 buildingobject.images.map((item,index)=>{
                  
                   return <BuildPhoto key={index} src={item}/>
               })}
                
                
              
                 </div>
             </div>
          
        );
        
            }
    }
       

    return (
 
<div className= {props.panelopened ? 'infocontainer open': "infocontainer"}>
   <div class="infocontainer_arrow">
       <a href="#!">
           <i class="fas fa-chevron-left" onClick={() => { props.setOpen(!props.panelopened); }}></i>
       </a>
       
   </div>
   
{renderBuildInfo()}

 <div class="yandexcard"></div>
</div>

    );
}

export default InfoPanel;