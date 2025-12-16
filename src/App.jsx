import List from "./components/List/list";
import Chat from "./components/chat/chat";
import Detail from "./components/details/detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

const App = () => {
  const user = true;

  return (
    <div className="container">
      {/* {user ? (
        <div>
          <List />
          <Chat />
          <Detail />
        </div>
      ) : (
        <Login />
      )} */}
      <List />
      <Chat />
      <Detail />
      <Notification />
    </div>
  );
};

export default App;
