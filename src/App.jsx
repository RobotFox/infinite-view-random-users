import DatePicker from "./components/DatePicker";
import Header from "./components/Header";
import UsersListContainer from "./components/UsersListContainer";

const App = () => {
  return (
    <>
      <Header appTitle="Infinite View Random Users" />
      <DatePicker />
      <UsersListContainer />
    </>
  );
};

export default App;
