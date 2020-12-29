import axios from 'axios';


async function getOsmCoordinates(address)
{

    try {
        let result = await axios.get(`https://nominatim.openstreetmap.org/search.php`, {
            params: {
              q: address,
              polygon_geojson:"1",
              format:"jsonv2"
    
            }

          }); 

          if(result.data && result.data.length >0)
          {
              return {lat : parseFloat(result.data[0].lat),lon: parseFloat(result.data[0].lon)}
          }
          else
          {
              throw("Not found");
          }

    } catch (e) {
        throw(e);
    } 



   


 
}

export {  getOsmCoordinates }