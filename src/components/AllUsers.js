import { useSelector } from "react-redux";
import User from "./User";

function AllUsers({ deleteUser, handleEdit }) {
  const users = useSelector((state) => {
    return state.UsersReducer.users;
  });
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
