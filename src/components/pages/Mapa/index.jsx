import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './styles.modules.scss';
import 'leaflet/dist/leaflet.css'



function Mapa() {
    const position = [-22.90340085733167, -43.179698128047086]
//     L.tileLayer('https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
//     attribution: '<a href="https://jawg.io/" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     minZoom: 0,
//     maxZoom: 22,
//     accessToken: '<your accessToken>'
// });

//  let  str2 = "abc"
//  str2[2]
// 'abc'.includes('bc')
    



    return (
        <div className="container_mapa">


            <MapContainer center={position} zoom={303} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={"https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=" + import.meta.env.VITE_TOKEN}
                />
                <Marker position={position}>
                    <Popup>
                        Edificio Patrimônio <br/>
                        Praça Olavo Bilac, 28 <br/>
                        Centro, Rio de Janeiro - RJ
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}

export default Mapa;
