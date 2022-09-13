import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import phone from '../Images/phone.png'
import mail from '../Images/mail.png'
import './ModalContact.scss'

export default function ModalContact(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          Contactate con nosotros:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <img src={phone} alt='not found' />
        <h4>Martillero Miguel Quilmore: +54 9 11 3786-8094</h4>
        <h4>Asesores: +54 9 11 2492-3030</h4>
        <p>
          Podés contactarnos vía whatsapp o llamarnos por telefono
        </p>

        <img src={mail} alt='not found'/>
        <h4>Mail: quilmorepropiedades@gmail.com</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button className="modal-button" onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
