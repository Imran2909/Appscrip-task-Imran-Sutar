import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { RiSearch2Line } from "react-icons/ri";
import { PiHeartLight } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      {/* 🔹 Top Strip */}
      <div className={styles.topStrip}>
        <div className={styles.stripLeft}>Lorem ipsum dolor</div>
        <div className={styles.stripCenter}>Lorem ipsum dolor</div>
        <div className={styles.stripRight}>Lorem ipsum dolor</div>
      </div>

      {/* 🔹 Main Header Section */}
      <div className={styles.mainHeader}>
        <div className={styles.logoSection}>
          <Image
            src="/images/Logo.png"
            alt="Brand Logo"
            width={36}
            height={36}
            className={styles.logo}
          />
        </div>

        <div className={styles.centerTitle}>LOGO</div>

        <div className={styles.iconSection}>
          <RiSearch2Line className={styles.icon} />
          <PiHeartLight className={styles.icon} />
          <BsHandbag className={styles.icon} />
          <HiOutlineUser className={styles.icon} />
          <div className={styles.langSelect}>
            ENG <GoChevronDown className={styles.dropdownIcon} />
          </div>
        </div>
      </div>

      {/* 🔹 Navigation Bar */}
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
