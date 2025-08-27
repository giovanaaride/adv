//import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './styles.modules.scss';
import 'leaflet/dist/leaflet.css'


function Mapa() {
    return (
        <div className="container_mapa">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.271280578519!2d-43.18232832403107!3d-22.903362779257552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5dd537216d%3A0x5d5d1802ff2d5965!2sPra%C3%A7a%20Olavo%20Bilac%2C%2028%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020041-010!5e0!3m2!1spt-BR!2sbr!4v1756260992405!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Mapa;






//function Mapa() {
//   const position = [-22.90340085733167, -43.179698128047086]
//     L.tileLayer('https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
//     attribution: '<a href="https://jawg.io/" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     minZoom: 0,
//     maxZoom: 22,
//     accessToken: '<your accessToken>'
// });

//  let  str2 = "abc"
//  str2[2]
// 'abc'.includes('bc')
    



    //return (
       // <div className="container_mapa">


         //   <MapContainer center={position} zoom={303} scrollWheelZoom={false}>
         //       <TileLayer
         //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         //           url={"https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=" + import.meta.env.VITE_TOKEN}
         //       />
         //       <Marker position={position}>
         //           <Popup>
         //               Edificio Patrimônio <br/>
        //                Praça Olavo Bilac, 28 <br/>
         //               Centro, Rio de Janeiro - RJ
         //           </Popup>
         //       </Marker>
         //   </MapContainer>
//
      //  </div>
//    )
//}
//export default Mapa;
