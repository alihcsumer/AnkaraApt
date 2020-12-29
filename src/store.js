import { configureStore} from '@reduxjs/toolkit'
import mapReducer from './reducers/mapSlice'



export default configureStore({
  reducer: {
    map: mapReducer
  }
})