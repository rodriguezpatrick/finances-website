// import Stock from "./components/Stock"
import styles from "./InputStock.module.css";
import { useState } from "react";

function InputStock() {
  const [stockTicker, setStockTicker] = useState("");

  const handleChange = (e) => setStockTicker(e.target.value)

  const handleSubscribe = () => {
      if (stockTicker !== ""){
        console.log('agora eu preciso saber como eu vou subscrever uma ação aqui')
      }else{
        alert('Por favor, insira o nome da ação que deseja monitorar')
      }
  }

  return (
    <div>
      <input
        type="text"
        value = {stockTicker}
        onChange = {handleChange}
        className={styles.inputStockName}
        placeholder="Digite o nome da ação"
      />
      <button className={styles.inputButton} onClick={handleSubscribe} >Adicionar</button>
      <ul className="stockList"></ul>
    </div>
  );
}

export default InputStock;
