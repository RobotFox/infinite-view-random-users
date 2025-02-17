const UserListItem = ({
  user: {
    login: { uuid = null } = {},
    picture: { thumbnail = null } = {},
    name: { first = "", last = "" } = {},
    location: {
      street: { number = "", name = "" } = {},
      postcode = "",
      city = "",
      state = "",
      country = "",
    } = {},
  } = {},
  setUserSelected,
}) => {
  const handleUserSelected = (uuid) => {
    setUserSelected(uuid);
  };

  return (
    <div className="card" onClick={() => handleUserSelected(uuid)}>
      <div className="pic">
        <img src={thumbnail} alt="Avatar" className="avatar"></img>
      </div>
      <div className="info">
        <div className="card-container">
          <div className="title-row">
            <div className="title">
              <h3>
                <b>
                  {first} {last}
                </b>
              </h3>
              <p>
                Indirizzo: {name} {number}
              </p>
              <p>
                {postcode}, {city} ({state}) - {country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
