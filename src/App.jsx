import List from "./components/List/list";
import Chat from "./components/chat/chat";
import Detail from "./components/details/detail";
import Login from "./components/login/Login";

const App = () => {
  const user = false;

  return (
    <div className="container">
      {user ? (
        <div>
          <List />
          <Chat />
          <Detail />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
