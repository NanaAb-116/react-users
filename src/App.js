import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddNewUser } from "./actions/userActions";
import { auth, db } from "./firebase/firebaseConfig";
import { dispatchUser } from "./actions/authAction";
import Routers from "./Routers";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const readData = async () => {
      const q = query(collection(db, "users"), orderBy("timestamp", "asc"));
      onSnapshot(q, (querySnapshot) => {
        const usersArr = [];
        querySnapshot.forEach((doc) => {
          usersArr.push(doc.data());
        });
        dispatch(AddNewUser(usersArr));
      });
    };
    readData();
  }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        dispatch(dispatchUser(users));
      } else {
        dispatch(dispatchUser(null));
      }
    });
  }, [dispatch]);
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
