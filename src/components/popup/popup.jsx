import Modal from 'react-bootstrap/Modal';

const Popup = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='border border-0' closeButton></Modal.Header>
     {props.children}
    </Modal>
  );
}

export default Popup;
