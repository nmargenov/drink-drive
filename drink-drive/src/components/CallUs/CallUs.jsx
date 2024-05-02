import styles from "./CallUs.module.css";

export const CallUs = () =>{
    return(
        <button className={styles['callBtn']} onClick={()=>{window.location.href="tel:+359884000403"}}>Обади ни се</button>
    )
}