import styles from "./Header.module.css"

export const Header = () =>{
    return(
    <header>
        <div className={styles['logo-div']}>
            <img src='/images/logo.avif' alt="" />
        </div>
        <nav>
            <ul>
                <li>Услуги</li>
                <li>Информация</li>
                <li>Цени</li>
            </ul>
        </nav>
    </header>
);
}