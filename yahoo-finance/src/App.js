import "./App.css";
import Stock from "./components/organisms/stock/Stock";
import InputStock from "./components/organisms/inputStock/inputStock";

function App() {
  return (
    <div className="App">
      <InputStock />
      <Stock />
    </div>
  );
}

export default App;
