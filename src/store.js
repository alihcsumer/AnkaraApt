import { configureStore} from '@reduxjs/toolkit'
import mapReducer from './reducers/mapSlice'
import buildingReducer from './reducers/buildingSlice'



export default configureStore({
  reducer: {
    map: mapReducer,
    buildings : buildingReducer
  }
})