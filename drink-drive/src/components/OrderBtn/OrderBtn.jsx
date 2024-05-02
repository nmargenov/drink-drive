import styles from "../CallUs/CallUs.module.css";

export const OrderBtn = ({onClickHandler}) =>{
    return(
        <button className={styles['callBtn']} onClick={()=>{onClickHandler('form')}} >Поръчай онлайн</button>
    )
}