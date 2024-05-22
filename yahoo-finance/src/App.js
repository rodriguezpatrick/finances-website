import "./App.css";
import Stock from "./components/Stock";
import InputStock from "./components/inputStock";

function App() {
  return (
    <div className="App">
      <InputStock />
      <Stock />
    </div>
  );
}

export default App;
