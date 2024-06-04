import styles from './Button.module.css'

function Button({handleChange}){
    
    
    // eu tenho que mudar essa funcionalidade para outro lugar por que o botao deve ser o básico para caso se eu precisar de usar esse botao para outra funcionalidade no futuro eu conseguir reutilizar
    // coloquei a props handleChange por que eu pensei que seria algo mais generalista do que escrever "handleSubscribeStock" já que esse botao pode nao ser utilizado somente para isso!! 


    return(
        <button className={styles.inputButton} onClick={handleChange} >Adicionar</button>
    )
}

export default Button;

