import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { EditUser } from "../actions/userActions";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function EditUserForm({ userData, hide }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [gen, setGen] = useState(userData.gen);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userRef = doc(db, "users", userData.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      userData,
    });

    dispatch(EditUser({ id: userData.id, name, email, gen }));
    setName("");
    setEmail("");
    setGen("");
    hide();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control
          type="gen"
          value={gen}
          onChange={(e) => {
            setGen(e.target.value);
          }}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditUserForm;
