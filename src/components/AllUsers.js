import User from './User';

function AllUsers({ userData, deleteUser, handleEdit }) {
  return (
    <>
      <div class='container'>
        <div className='row'>
          {userData.map((item, index) => {
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
