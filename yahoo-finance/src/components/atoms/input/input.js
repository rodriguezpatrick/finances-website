import styles from "./Input.module.css";

function Input({value, handleChange}) {
  
  // mesma coisa do botao que eu tenho que deixar o input o mais reutilizavel possivel, entao eu tenho que pensar em nomes que realmente fazem sentido; que eles sejam mais generalistas

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className={styles.inputStockName}
      placeholder="Digite o nome da ação"
    />
  );
}

export default Input;
