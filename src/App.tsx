import "./App.css";
import Component from "./components/Component";

function App() {
  return (
    <div>
      This is {process.env.REACT_APP_TEST}
      <Component></Component>
    </div>
  );
}

export default App;
