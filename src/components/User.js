import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../actions/userActions";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function User({ userData, handleEdit }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    await deleteDoc(doc(db, "users", userData.id));
    // dispatch(DeleteUser(userData.id));
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
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Name: {userData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Email: {userData.email}
          </h6>
          <p className="card-text">Gen: {userData.gen}</p>
          <button
            className="btn btn-primary mr-3"
            onClick={handleShow}
            // role="button"
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={handleDelete}
            // role="button"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default User;
