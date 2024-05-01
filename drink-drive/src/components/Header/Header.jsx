import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css"
import { faBars, faX, } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export const Header = () =>{
    const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if(isNavOpen){
        
    }
  };


  const scrollToTop = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
      if(isNavOpen){
        toggleNav();
      }
    };

    return(
    <>
    <header id="header" className={styles['blurried']}>
        <div className={styles['logo-div']}>
            <img onClick={scrollToTop} src='/images/logo.avif' alt="" />
        </div>
        <nav className={isNavOpen ? styles['visiable'] : styles['non-visiable']}>
            <ul className={styles['blurried']}>
                <li onClick={()=>{scrollToElement('about-us')}}>За нас</li>
                <li onClick={()=>{scrollToElement('work')}}>Как работим</li>
                <li>Цени</li>
                <li>Поръчай</li>
            </ul>
        </nav>
        <div className={styles['actions']}>
            <FontAwesomeIcon onClick={toggleNav} id={styles["bars"]} icon={isNavOpen ? faX : faBars} />
        </div>
    </header>
    <div className={styles["background"]}>
        <img src="/images/carmain.png" alt="" />
        <div className={styles["info"]}>
          <div className={styles["text"]}>
            <h1>Вие пиете, ние Ви прибираме</h1>
            <h2><span>НЕ</span> шофирайте пили!</h2>
          </div>
          <div className={styles["buttons"]}>
            <button onClick={()=>{window.location.href="tel:+359884000403"}}>Обади ни се</button>
            <button>Поръчай онлайн</button>
          </div>
        </div>
    </div>
    </>
);
}