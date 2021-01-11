function BuildPhoto(props) {

    return (
        <div class="buildphoto">
        <img onClick={props.onClick} src={props.src} alt="My Projects"/>
   </div>
    );
}

export default BuildPhoto;