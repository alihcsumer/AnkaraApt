import Map from "./Map"

import SearchBox from "./SearchBox"
import InfoPanel from "./InfoPanel"

import { useState } from 'react';

function Content() {

    const [opened, setOpen] = useState(false); 
    
 


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