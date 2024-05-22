// import Stock from "./components/Stock"
import styles from "./InputStock.module.css";

function InputStock() {
  //   const inputStock = document.getElementsByClassName("inputStockName")[0];
  //   const addButton = document.getElementsByClassName("button")[0];
  //   const list = document.getElementsByClassName("stockList")[0];

  return (
    <div>
      <input
        type="text"
        className={styles.inputStockName}
        placeholder="Digite o nome da ação"
      />
      <button className={styles.inputButton}>Adicionar</button>
      <ul className="stockList"></ul>
    </div>
  );
}

export default InputStock;
