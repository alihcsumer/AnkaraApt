

import { useRef } from 'react';
import { useDispatch ,useSelector} from 'react-redux'
import {
    getCoordinates,selectSearchStatus,
  } from './reducers/mapSlice';

  

function SearchBox(props) {
   
    const dispatch = useDispatch()
    const status = useSelector(selectSearchStatus);
    const inputAdd = useRef(null);
    const handleClick = () => {
      if(inputAdd.current.value.length>3)
      {
        dispatch(getCoordinates(inputAdd.current.value));
    
      }
    }
    return (
        <div className="searchBox">
     
        <input ref={inputAdd}   className="geocoding" type="text" />
        {status ==="loading"
        ?     <i class="spinner">Loading...</i>
        :         <i className="fas fa-search geocodingicon" onClick={handleClick}></i>
      }
      

    
        </div>
    );
}

export default SearchBox;