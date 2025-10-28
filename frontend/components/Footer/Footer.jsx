"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";

const PAYMENT_IMAGES = [
  { src: "/images/gpay.png", alt: "G Pay" },
  { src: "/images/mastercard.webp", alt: "Mastercard" },
  { src: "/images/paypal.jpg", alt: "PayPal" },
  { src: "/images/american-express.png", alt: "American Express" },
  { src: "/images/apple-pay.jpg", alt: "Apple Pay" },
  { src: "/images/shop-pay.png", alt: "Shop Pay" },
];

const LINKS_LEFT = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];

const LINKS_QUICK = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openId, setOpenId] = useState("all");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const updateIsMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setOpenId(mobile ? null : "all");
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const toggle = (id) => {
    if (!isMobile) return;
    setOpenId((prev) => (prev === id ? null : id));
  };

  const submitSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
    alert("Subscribed (demo)");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* ---------- Top subscription row ---------- */}
        <div className={styles.topRow}>
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>BE THE FIRST TO KNOW</h2>
            <p className={styles.subtext}>
              Sign up for updates from mettā muse.
            </p>

            <form className={styles.subscribeForm} onSubmit={submitSubscribe}>
              <input
                className={styles.emailInput}
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                type="email"
                required
              />
              <button className={styles.subscribeBtn} type="submit">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className={styles.rightCol}>
            <h3 className={styles.headingSmall}>CONTACT US</h3>
            <div className={styles.contact}>
              <div>+44 221 133 5360</div>
              <div>customercare@mettamuse.com</div>
            </div>

            <hr className={styles.hrShort} />

            <h3 className={styles.headingSmall}>CURRENCY</h3>
            <div className={styles.currency}>
              <Image
                src="/images/usa.webp"
                alt="United States flag"
                width={20}
                height={14}
                className={styles.flagImage}
                priority={false}
              />
              <span className={styles.currencyText}>· USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        {/* ---------- Links area ---------- */}
        <div className={styles.linksArea}>
          {/* mettā muse */}
          <div className={styles.col}>
            <button
              className={styles.sectionToggle}
              onClick={() => toggle("meta")}
              aria-expanded={openId === "meta" || openId === "all"}
            >
              <div className={styles.colTitle}>mettā muse</div>
              {isMobile && (
                <div className={styles.chev}>
                  {openId === "meta" ? "▾" : "▸"}
                </div>
              )}
            </button>

            <div
              className={`${styles.colList} ${
                openId === "meta" || openId === "all" ? styles.open : ""
              }`}
            >
              {LINKS_LEFT.map((t) => (
                <a key={t} href="#" className={styles.linkItem}>
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <button
              className={styles.sectionToggle}
              onClick={() => toggle("quick")}
              aria-expanded={openId === "quick" || openId === "all"}
            >
              <div className={styles.colTitle}>QUICK LINKS</div>
              {isMobile && (
                <div className={styles.chev}>
                  {openId === "quick" ? "▾" : "▸"}
                </div>
              )}
            </button>

            <div
              className={`${styles.colList} ${
                openId === "quick" || openId === "all" ? styles.open : ""
              }`}
            >
              {LINKS_QUICK.map((t) => (
                <a key={t} href="#" className={styles.linkItem}>
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div className={styles.col}>
            <button
              className={styles.sectionToggle}
              onClick={() => toggle("follow")}
              aria-expanded={openId === "follow" || openId === "all"}
            >
              <div className={styles.colTitle}>FOLLOW US</div>
              {isMobile && (
                <div className={styles.chev}>
                  {openId === "follow" ? "▾" : "▸"}
                </div>
              )}
            </button>

            <div
              className={`${styles.colList} ${
                openId === "follow" || openId === "all" ? styles.open : ""
              } ${styles.socialRow}`}
            >
              <a href="#" className={styles.socialBtn} aria-label="Instagram">
                <span className={styles.iconRound}>
                  <AiFillInstagram className={styles.iconInner} />
                </span>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
                <span className={styles.iconRound}>
                  <IoLogoLinkedin className={styles.iconInner} />
                </span>
              </a>
            </div>

            <div className={styles.paymentTitle}>mettā muse ACCEPTS</div>
            <div className={styles.paymentRow}>
              {PAYMENT_IMAGES.map((p) => (
                <Image
                  key={p.alt}
                  src={p.src}
                  alt={p.alt}
                  width={56}
                  height={35}
                  className={styles.paymentLogo}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div>Copyright © 2023 mettamuse. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
