
import { useEffect, useState } from "react";
import protobuf from "protobufjs";
const { Buffer } = require("buffer/");

export const UseWebSocket = (ticker) => {
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
              subscribe: [ticker],
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
    }, [ticker]);

    return stock
};

