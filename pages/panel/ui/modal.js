import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function UIModal({props}) {
  console.log(props);

  return (
    <>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        {props.title && <ModalHeader>{props.title??""}</ModalHeader>}
        <ModalBody>
          {props.content}
        </ModalBody>
        <ModalFooter>
          {props.btnAccept && <Button color="primary" onClick={props.btnAccept}>OK</Button>}
          {props.btnCancel && <Button color="secondary" onClick={props.btnCancel}>Cerrar</Button>}
        </ModalFooter>
      </Modal>
    </>
  );
}