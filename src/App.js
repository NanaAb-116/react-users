import "bootstrap/dist/css/bootstrap.min.css";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  querySnapshot,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddNewUser } from "./actions/userActions";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import { db } from "./firebase/firebaseConfig";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const readData = async () => {
      const q = query(collection(db, "users"), orderBy("timestamp", "asc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const usersArr = [];
        querySnapshot.forEach((doc) => {
          usersArr.push(doc.data());
        });
        dispatch(AddNewUser(usersArr));
        console.log(usersArr);
      });
    };

    readData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <AddUserForm />
          </div>
          <div className="col-md-6">
            <AllUsers />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
