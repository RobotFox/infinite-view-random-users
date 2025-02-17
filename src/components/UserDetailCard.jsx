import { useEffect, useState } from "react";

const UserDetailCard = ({ usersList, userSelected, setUserSelected }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const list = [...usersList];

    const person = list.find((p) => p.login.uuid === userSelected);

    console.log("list", list);
    console.log("person", person);

    setUser(person);
  }, []);

  const {
    login: { uuid = null } = {},
    picture: { large = null } = {},
    name: { first = "", last = "" } = {},
    email = "",
    dob: { date = "" } = {},
    location: {
      street: { number = "", name = "" } = {},
      postcode = "",
      city = "",
      state = "",
      country = "",
    } = {},
    phone = "",
  } = user;

  const handleDate = (date) => {
    let defaultDate = "";
    try {
      defaultDate = new Date(date).toLocaleDateString("it-IT");
    } catch (error) {
      console.log("UserDetailCard::handleDate::Error", error);
    }

    return defaultDate;
  };

  return (
    <>
      {uuid && (
        <div className="detail-card">
          <img className="detail-pic" src={large} alt={`${first} ${last}`} />
          <h1 className="detail-primary-title">{`${first} ${last}`}</h1>
          <p className="detail-title">{email}</p>
          <p>
            <b>Data di nascita:</b> {handleDate(date)}
          </p>
          <p>
            <b>Indirizzo:</b> {name} {number}
          </p>
          <p>
            {postcode}, {city} ({state}) - {country}
          </p>
          <p>
            <b>Numero di telefono:</b> {phone}
          </p>
          <p>
            <button
              className="detail-button"
              onClick={() => setUserSelected(null)}
            >
              Indietro
            </button>
          </p>
        </div>
      )}
    </>
  );
};

export default UserDetailCard;
