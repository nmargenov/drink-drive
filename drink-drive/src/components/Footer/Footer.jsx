import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () =>{
    return(
        <div className={styles['footer-div']}>
            <div className={styles['first']}>
                <h1>SV Drive</h1>
            </div>
            <div className={styles['second']}>
                 <h2>Контакти</h2>
                 <div className={styles['contact']}>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <p>drinkdriveplovdiv@gmail.com</p>
                 </div>
                 <div className={styles['contact']}>
                    <FontAwesomeIcon icon={faPhone}/>
                    <p>0887 719 696</p>
                 </div>
            </div>
            <div className={styles['third']}>
                 <h2>Последвайте ни</h2>
                 <div>
                 </div>
            </div>

            <p>Copyright &copy; 2024 | All rights reserved</p>
        </div>
    )
}