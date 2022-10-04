import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";

function App() {
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
