import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { RiSearch2Line } from "react-icons/ri";
import { PiHeartLight } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.topStrip}>
        <div className={styles.stripLeft}>Lorem ipsum dolor</div>
        <div className={styles.stripCenter}>Lorem ipsum dolor</div>
        <div className={styles.stripRight}>Lorem ipsum dolor</div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.leftSection} >
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.logoSection}>
            <Image
              src="/images/Logo.png"
              alt="Brand Logo"
              width={26}
              height={26}
              className={styles.logo}
            />
          </div>
        </div>

        <div className={styles.centerTitle}>LOGO</div>

        <div className={styles.iconSection}>
          <RiSearch2Line className={styles.icon} />
          <PiHeartLight className={styles.icon} />
          <BsHandbag className={styles.icon} />
          <div className={styles.langSelect}>
            <HiOutlineUser className={styles.icon} />
            ENG <GoChevronDown className={styles.dropdownIcon} />
          </div>
        </div>
      </div>

      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

      <div className={styles.strip}>
        <p className={styles.home} >  HOME <span className={styles.shop} >SHOP</span>  </p>
      </div>

      {menuOpen && (
        <ul className={styles.mobileNav}>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      )}
    </header>
  );
};

export default Header;
