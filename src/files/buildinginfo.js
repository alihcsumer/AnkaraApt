import axios from 'axios';


async function getBuildingFeatures()
{

    try {
        let result = await axios.get(`./geojson.json`); 

          if(result.data && result.data.length >0)
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