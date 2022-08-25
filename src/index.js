import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const Context = React.createContext();

const Parent = () => {
  return (
    <div>
      <h1>Parent</h1>
      <Child />
    </div>
  );
};

const Child = () => {
  return (
    <div>
      <h1>Child</h1>
      <Grandchild />
    </div>
  );
};

const Grandchild = ({ name }) => {
  return (
    <Context.Consumer>
      {(name) => (
        <div>
          <h1>Grandchild</h1>
          <h3>Name: {name}</h3>
        </div>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  const name = "Andrew";

  return (
    <Context.Provider value={name}>
      <Parent />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
