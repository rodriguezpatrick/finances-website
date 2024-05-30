import styles from "./Stock.module.css";
import { useEffect, useState } from "react";
import protobuf from "protobufjs";
const { Buffer } = require("buffer/");

function Stock() {
        const[stock, setStock] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("wss://streamer.finance.yahoo.com");
    protobuf.load("./YPricingData.proto", (error, root) => {
      if (error) {
        return console.log(error);
      }

      const Yaticker = root.lookupType("yaticker");

      ws.onopen = function open() {
        console.log("connected");
        ws.send(
          JSON.stringify({
            subscribe: ["PETR4.SA"],
          })
        );
      };

      ws.onclose = function close() {
        console.log("disconnected");
      };

      ws.onmessage = function incoming(message) {
        const next = Yaticker.decode(new Buffer(message.data, "base64"));
        setStock(next)
      };
    });
  }, []);
  return <div className={styles.Stock}>
        {stock && <h2>{stock.id}: {stock.price}</h2>}
  </div>;
}

export default Stock;
