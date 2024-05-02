import styles from "./CallUs.module.css";

export const CallUs = () =>{
    return(
        <button className={styles['callBtn']} onClick={()=>{window.location.href="tel:+359887719696"}}>Обади ни се</button>
    )
}