// StockListItem.js
import React from "react";
import  {UseWebSocket} from '../../Hooks/WebsocketConnection/UseWebSocket';
import styles from "./stockListItem.module.css";

const StockListItem = ({ ticker }) => {
  const stock = UseWebSocket(ticker);

  return (
    <div className={styles.stock}>
      {stock && (
        <div>
          <h2>{stock.id}</h2>
          <p>{stock.price}</p>
        </div>
      )}
    </div>
  );
};

export default StockListItem;
