import { useState } from 'react'
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import StockListItem from '../stockListItem/stockListItem';
import styles from "../../molecules/inputButton/InputButton.module.css";


function InputButton() {
  const [stockTicker, setStockTicker] = useState("");
  const [subscribedStocks, setSubscribedStocks] = useState([]);

  const handleChange = (event) => setStockTicker(event.target.value);

  const handleSubscribe = () => {
    if (stockTicker !== "") {

      setSubscribedStocks((prevStocks) => [...prevStocks, stockTicker]);
      setStockTicker("");

    } else {
      alert("Por favor, insira o nome da ação que deseja monitorar");
    }
  };

  return (
    <div className={styles.containerInputButton}>
      <div>

      <Input value={stockTicker} handleChange={handleChange} />
      <Button handleChange={handleSubscribe} />

      </div>

      <div className={styles.stock}>
        {subscribedStocks.map((ticker, index) => (
          <StockListItem key={index} ticker={ticker} />
        ))}
      </div>

    </div>
  );
}

export default InputButton;
