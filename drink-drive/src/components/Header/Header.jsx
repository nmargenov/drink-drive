import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css"
import { faBars, faX, } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { CallUs } from "../CallUs/CallUs";
import { OrderBtn } from "../OrderBtn/OrderBtn";


export const Header = () =>{
    const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  const scrollToTop = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(isNavOpen){
      toggleNav();
    }
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

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      function handleScroll() {
        const scrollTop = window.pageYOffset;
  
        // Check if scrolled to the bottom
        setIsScrolled(scrollTop > 100 );
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
    <>
    <header id="header" className={isScrolled ? styles['blurried'] : ""}>
        <div className={styles['logo-div']}>
            <img onClick={scrollToTop} src='/images/logo.avif' alt="" />
        </div>
        <nav className={isNavOpen ? styles['visiable'] : styles['non-visiable']}>
            <ul>
                <li onClick={()=>{scrollToElement('about-us')}}>За нас</li>
                <li onClick={()=>{scrollToElement('work')}}>Как работим</li>
                <li onClick={()=>{scrollToElement('price')}}>Цени</li>
                <li onClick={()=>{scrollToElement('form')}}>Поръчай</li>
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
            <CallUs/>
            <OrderBtn onClickHandler={scrollToElement}/>
          </div>
          <p id={styles['plovdiv']}>24/7 на територията на гр.Пловдив</p>
        </div>
    </div>
    </>
);
}