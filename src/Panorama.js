import { YMaps,Panorama } from 'react-yandex-maps';

export default function YandexPanorama(props) {
console.log(props);
    return (
  <YMaps query={{ apikey: '' }}>
  <Panorama width={"100%"} point={props.building.location} />
</YMaps>
    );
}