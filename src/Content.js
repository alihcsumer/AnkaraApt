import Map from "./Map"

import SearchBox from "./SearchBox"
import InfoPanel from "./InfoPanel"

import { useState } from 'react';

function Content() {

    const [opened, setOpen] = useState(false); 
    
    let buildingobject = {
   photos :['https://pbs.twimg.com/media/EoyAHytXYAExZT0?format=jpg&name=360x360',
   'https://pbs.twimg.com/media/EoyAJoNXcAAGjkB?format=jpg&name=small',
   'https://pbs.twimg.com/media/EoyALoIXEAApByn?format=jpg&name=360x360',
   'https://pbs.twimg.com/media/EoyANRUXMAAKXDe?format=jpg&name=360x360'],
   name : "Çam Apartmanı",
   address : "Şehit Erdönmez Sokak No:8"

    };



    return (


<content>
<div class="maincontainer">
<div class="mapcontainer">
    <SearchBox/>
    <Map panelopened={opened}/>
</div>
<InfoPanel panelopened={opened} setOpen={setOpen} ></InfoPanel>
</div>
    </content>
    );
    }
    export default Content;