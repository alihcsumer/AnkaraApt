

import { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux'
import {
    getCoordinates,selectSearchStatus
  } from './reducers/mapSlice';

function SearchBox(props) {
    const [input, setInput] = useState(''); 
    const dispatch = useDispatch()
    const status = useSelector(selectSearchStatus);

    return (
        <div className="searchBox">
     
        <input value={input} onInput={e => setInput(e.target.value)}  className="geocoding" type="text" />
        {status ==="loading"
        ?     <i class="spinner">Loading...</i>
        :         <i className="fas fa-search geocodingicon" onClick={() => { 
          if(input.length>0)
          {dispatch(getCoordinates(input));
          }
                }}></i>
      }
      

    
        </div>
    );
}

export default SearchBox;