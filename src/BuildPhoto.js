import {useState,useEffect} from 'react';
function BuildPhoto(props) {

    const [loaded,setLoaded] = useState(false);

    let src = props.src && props.src.replace(".jpg","?format=jpg&name=small")

    let handleImageLoaded = (e) => {
        setLoaded(true);
       
    }

    useEffect(()=>{
        setLoaded(false);
     
    },[props.src])


    return (
        
        <div class="buildphoto">

        <img style={loaded?{display: "block"}:{display: "none"}} onClick={props.onClick} src={src} onLoad={handleImageLoaded} alt="My Projects"/>

   </div>
    );
}

export default BuildPhoto;