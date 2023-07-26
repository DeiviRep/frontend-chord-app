// import logo from './logo.svg';
import "./App.css";
import Router1 from "./routes/Router1";
import Provider from "./context/Provider";

function App() {
  return (
    <>
      <Provider>
        <Router1 />
      </Provider>
    </>
  );
}

export default App;
