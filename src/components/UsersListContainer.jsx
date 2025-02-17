import { useEffect, useState } from "react";
import Error from "./Error";
import { getUsers } from "../api/users";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import UsersList from "./UsersList";
import UserDetailCard from "./UserDetailCard";

const UsersListContainer = () => {
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    await getUsers(page)
      .then((res) => setUsersList((prev) => [...prev, ...res.data.results]))
      .catch((err) => {
        console.log("UsersListContainer.getUsersError()", err);
        setUsersList([]);
        setErrorMessage(
          "Errore nel recupero degli Utenti. Riprovare più tardi!"
        );
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchUsers = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="center-content">
        {errorMessage ? (
          <Error errorMessage={errorMessage} />
        ) : userSelected ? (
          <UserDetailCard
            usersList={usersList}
            userSelected={userSelected}
            setUserSelected={setUserSelected}
          />
        ) : (
          <InfiniteScroll
            dataLength={usersList.length}
            next={fetchUsers}
            hasMore={true}
            loader={
              <Loading message={"Caricamento degli Utenti in corso..."} />
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Utenti Terminati!</b>
              </p>
            }
            scrollThreshold={0.9}
          >
            <UsersList
              usersList={usersList}
              setUserSelected={setUserSelected}
            />
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default UsersListContainer;
