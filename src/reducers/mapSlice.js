import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {getOsmCoordinates} from "../geocoding/osmgeocoding";


export const getCoordinates = createAsyncThunk('getCoordinates', async (address) => {

  const response = await getOsmCoordinates(address)
  return response;
}) 



const mapSlice = createSlice({
  name: 'map',
  initialState: {
    value: {
      latitude: 39.92499,
      longitude: 32.85494,
      zoom: 13,
      status:"idle"
    }
  },
  reducers: {
    reset: state => {
     
      state.value = {
        latitude: 39.92499,
        longitude: 32.85494,
        zoom: 13       
      };
    },
    changeCenter: (state, action) => {
      state.value.latitude = action.payload.latitude;
      state.value.longitude = action.payload.longitude;
    },
    changeZoom : (state,action) => {
      state.value.zoom = action.payload.zoom
    },
  },
  extraReducers:  { 
      [getCoordinates.fulfilled] :(state, action) => {
     
        state.value.latitude =  action.payload.lat
        state.value.longitude = action.payload.lon
        state.value.zoom = 16
        state.value.status = 'idle'
        },
        [getCoordinates.pending] :(state, action) => {
         
          state.value.status = 'loading'
          },
        }  
  
})
export const selectCenter = state => state.map.value;
export const selectSearchStatus = state => state.map.value.status;

export const { reset, changeCenter, changeZoom } = mapSlice.actions

export default mapSlice.reducer