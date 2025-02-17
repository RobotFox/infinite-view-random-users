import UserListItem from "./UserListItem";

const UsersList = ({ usersList, setUserSelected }) => {
  return (
    <div className="list">
      {usersList.length > 0 && (
        <>
          {usersList.map((user) => (
            <UserListItem
              key={user.login.uuid}
              user={user}
              setUserSelected={setUserSelected}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default UsersList;
