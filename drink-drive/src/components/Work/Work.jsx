import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Work.module.css'
import { faCar, faClock, faMobileButton } from '@fortawesome/free-solid-svg-icons';

export const Work = () =>{
    return(
        <div id="work" className={styles['work-div']}>
            <h1>Как работим</h1>
            <h2>Лесна връзка с нас само в няколко стъпки</h2>
            <div className={styles['steps']}>
                <div className={styles['step']}>
                    <FontAwesomeIcon id={styles["icon"]} icon={faMobileButton}/>
                    <h3>Стъпка 1</h3>
                    <p>Свържете се с нас, уточнете вашата локация и автомобил.</p>
                    <p>Тел: 0887 719 696</p>
                </div>
                <div className={styles['step']}>
                    <FontAwesomeIcon id={styles["icon"]} icon={faClock}/>
                    <h3>Стъпка 2</h3>
                    <p>Разберете времето, необходимо да стигнем до Вас</p>
                </div>
                <div className={styles['step']}>
                    <FontAwesomeIcon id={styles["icon"]} icon={faCar}/>
                    <h3>Стъпка 3</h3>
                    <p>Нашият шофьор ще се свърже с Вас, когато е на адреса</p>
                </div>
            </div>
        </div>
    );
}