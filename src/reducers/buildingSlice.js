import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {getBuildingFeatures} from "../files/buildinginfo";
import BuildingDetails from "../files/sample_file.json"

 
export const getAptFeatures = createAsyncThunk('getAptFeatures', async () => {
  const response = await getBuildingFeatures();
  return response;
}) 

const buildingsSlice = createSlice({
  name: 'buildings',
  initialState: {
    value: {
       featureCollection : null,
       aptdetails : BuildingDetails,
       singleapt : null
    }
  },
  reducers: {
    buildingSelected: (state, action) => {
      
       let tw = state.value.aptdetails.find(item => item.id == action.payload)
       if(tw)
       {
           state.value.singleapt = tw;
       }
      },
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
export const { buildingSelected } = buildingsSlice.actions
export const selectFeatureCollection = state => state.buildings.value.featureCollection;
export const selectSingleApt = state => state.buildings.value.singleapt;
export default buildingsSlice.reducer