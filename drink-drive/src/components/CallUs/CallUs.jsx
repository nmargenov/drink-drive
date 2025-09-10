import styles from "./CallUs.module.css";

export const CallUs = () => {
    const phone = import.meta.env.VITE_APP_PHONE;
    return (
        <button className={styles['callBtn']} onClick={() => { window.location.href = `tel:${phone}` }}>Обади ни се</button>
    )
}