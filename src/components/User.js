import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';

function User({ userData, deleteUser, handleEdit }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    deleteUser(userData.id);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            handleEdit={handleEdit}
            hide={handleClose}
            userData={userData}
          />
        </Modal.Body>
      </Modal>
      <div className='card m-2' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>Name: {userData.name}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>
            Email: {userData.email}
          </h6>
          <p className='card-text'>Gen: {userData.gen}</p>
          <a
            class='btn btn-primary mr-3'
            href='#'
            onClick={handleShow}
            role='button'
          >
            Edit
          </a>
          <a
            class='btn btn-danger'
            href='#'
            onClick={handleDelete}
            role='button'
          >
            Delete
          </a>
        </div>
      </div>
    </>
  );
}

export default User;
