import BuildInfoCard from "./BuildInfoCard"
import BuildPhoto from "./BuildPhoto"

import { useState } from 'react';

function InfoPanel(props) {

    
    let buildingobject = {
        photos :['https://pbs.twimg.com/media/EoyAHytXYAExZT0?format=jpg&name=360x360',
        'https://pbs.twimg.com/media/EoyAJoNXcAAGjkB?format=jpg&name=small',
        'https://pbs.twimg.com/media/EoyALoIXEAApByn?format=jpg&name=360x360',
        'https://pbs.twimg.com/media/EoyANRUXMAAKXDe?format=jpg&name=360x360'],
        name : "Çam Apartmanı",
        address : "Şehit Erdönmez Sokak No:8"
     
         };

       

    return (
<div className= {props.panelopened ? 'infocontainer open': "infocontainer"}>
   <div class="infocontainer_arrow">
       <a href="#!">
           <i class="fas fa-chevron-left" onClick={() => { props.setOpen(!props.panelopened); }}></i>
       </a>
       
   </div>
   <div class="buildinfo">
  <BuildInfoCard buildingName={buildingobject.name} address={buildingobject.address} />
       <div class="buildphotos">
   
       {
      
       buildingobject.photos.map((item,index)=>{
        
         return <BuildPhoto key={index} src={item}/>
     })}
      
      
    
       </div>
   </div>
 <div class="yandexcard"></div>
</div>

    );
}

export default InfoPanel;