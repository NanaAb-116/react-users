import { useSelector } from "react-redux";
import User from "./User";

function AllUsers({ deleteUser, handleEdit }) {
  const { users } = useSelector((store) => store);
  return (
    <>
      <div className="container">
        <div className="row">
          {users.map((item, index) => {
            return (
              <User
                key={index}
                userData={item}
                deleteUser={deleteUser}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllUsers;
