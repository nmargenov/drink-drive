import styles from "./Price.module.css";

export const Price = () =>{
    return(
        <div id="price" className={styles['price-div']}>
            <h1 id={styles['heading']}>Цени</h1>
            <div className={styles["price-container"]}>
                <div className={styles['price']}>
                    <h1>Минимална цена за курс</h1>
                    <h2>22.00лв. с ДДС</h2>
                    <p id={styles["para"]}>До 5км включително</p>
                </div>
                <div className={styles['price']}>
                    <h1>Цена на километър</h1>
                    <h2>2,40лв.</h2>
                    <p id={styles["para"]}>+0.40лв. на минута</p>
                </div>
                <div className={styles['price']}>
                    <h1>Работно време</h1>
                    <h2>24/7</h2>
                    <p id={styles["para"]}>Без почивен ден</p>
                </div>
                <div className={styles['price']}>
                    <div className={styles['free']}>
                        <p>Безплатно</p>
                    </div>
                    <h1>Такса повикване</h1>
                    <p id={styles["para"]}>0.00лв.</p>
                </div>
            </div>
        </div>
    );
}