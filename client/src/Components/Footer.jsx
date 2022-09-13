import React from "react";
import insta from '../Images/instagram.png';
import phone from '../Images/phone.png';
import face from '../Images/facebook.png';
import './Footer.scss';

export default function Footer (){
    return(
        <div className="contMax" id="footer"> 
            <div className="contOne">
                <a href='https://www.instagram.com/propiedadesquilmore/'><img src={insta} alt='not found'/></a>
                <a href="https://www.facebook.com/Quilmorepropiedades.ok"><img src={face} alt='not found'/></a>
            </div>
            <div className="contTwo">
                <img alt='not found' src={phone}/>
                <h4>+54 9 11 2492-3030</h4>
                <h4>+54 9 11 3786-8094</h4>
                <p>Podés contactarnos por teléfono o vía whatsapp</p>
            </div>
            <div className="contThree">
                <h3>Oficina:</h3>
                <h6><a href="https://www.google.com.ar/maps/place/Carlos+Pellegrini+1120,+B1852FTX+Burzaco,+Provincia+de+Buenos+Aires/@-34.8221239,-58.3927545,2725a,13.1y/data=!3m5!1e1!3m3!1shT3HEhAk1kzElDoFy3MYFQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DhT3HEhAk1kzElDoFy3MYFQ%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D83.02115%26pitch%3D0%26thumbfov%3D100!4m5!3m4!1s0x95bcd4a119fb1737:0xa4997771b34639b0!8m2!3d-34.8221283!4d-58.3905658">Pellegrini 1120, Burzaco</a></h6>
                <p>Página creada por Nicole Quilmore</p>
            </div>
        </div>
    )
}