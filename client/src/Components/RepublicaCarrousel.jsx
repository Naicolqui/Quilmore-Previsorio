import Carousel from 'react-bootstrap/Carousel';
import './Carrousel.scss'
import first from '../Images/RepUno.png'
import second from '../Images/RepDos.png'
import third from '../Images/RepTres.png'
import { ButtonGroup, Button } from 'react-bootstrap';
export default function RepublicaCarrousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={first}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary"  href="https://wa.me/5491124923030?text=Hola!%20Me%20gustaría%20recibir%20información%20sobre%20el%20loteo%20República">WhatsApp</Button>
                        <Button variant="secondary" href='https://www.instagram.com/propiedadesquilmore/'>Instagram</Button>
                    </ButtonGroup>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={second}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" href="https://wa.me/5491124923030?text=Hola!%20Me%20gustaría%20recibir%20información%20sobre%20el%20loteo%20República">WhatsApp</Button>
                        <Button variant="secondary" href='https://www.instagram.com/propiedadesquilmore/'>Instagram</Button>
                    </ButtonGroup>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={third}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" href="https://wa.me/5491124923030?text=Hola!%20Me%20gustaría%20recibir%20información%20sobre%20el%20loteo%20República">WhatsApp</Button>
                        <Button variant="secondary" href='https://www.instagram.com/propiedadesquilmore/'>Instagram</Button>
                    </ButtonGroup>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
