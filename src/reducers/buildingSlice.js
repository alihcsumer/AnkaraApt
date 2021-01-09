import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {getBuildingFeatures} from "../files/buildinginfo";

 
export const getAptFeatures = createAsyncThunk('getAptFeatures', async () => {
  const response = await getBuildingFeatures();
  return response;
}) 

const buildingsSlice = createSlice({
  name: 'buildings',
  initialState: {
    value: {
       featureCollection : null
    }
  },
  reducers: {
 
  },
  extraReducers:  { 
      [getAptFeatures.fulfilled] :(state, action) => {
     
        state.value.featureCollection =  action.payload.featureCollection
        state.value.status = 'idle'
        },
        [getAptFeatures.pending] :(state, action) => {
         
          state.value.status = 'loading'
          },
        }  
  
})

export const selectFeatureCollection = state => state.buildings.value.featureCollection;

export default buildingsSlice.reducer