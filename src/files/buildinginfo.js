import axios from 'axios';


async function getBuildingFeatures()
{

    try {
        let result = await axios.get(`./geojson.json`); 

          if(result.data)
          {
              return {featureCollection : result.data } 
          }
          else
          {
              throw("Not found");
          }

    } catch (e) {
        throw(e);
    } 



   


 
}

export {  getBuildingFeatures }