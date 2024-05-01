import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css"
import { faBars, faClose, faX, } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const Header = () =>{
    const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if(isNavOpen){
        
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
    <header className={isScrolled ? styles["opaque"] : ""}>
        <div className={styles['logo-div']}>
            <img src='/images/logo.avif' alt="" />
        </div>
        <nav className={isNavOpen ? styles['visiable'] : ""}>
            <ul>
                <li>Услуги</li>
                <li>Информация</li>
                <li>Цени</li>
            </ul>
        </nav>
        <div className={styles['actions']}>
            <FontAwesomeIcon onClick={toggleNav} id={styles["bars"]} icon={isNavOpen ? faX : faBars} />
        </div>
    </header>
    <div className={styles["background"]}>
        <img src="/images/car.png" alt="" />
    </div>
    </>
);
}