import styles from "./Area.module.css"

export const Area = () =>{
    return(
        <div className={styles['area-div']}>
            <div className={styles['left']}>
                <p>Нашите шофьори са на разположение 24/7! Работим в област Пловдив, но предлагаме и услуги на територията на цяла България.</p>
            </div>
            <div className={styles['right']}>
                <img src="/images/map.png" alt="" />
            </div>
        </div>
    );
}