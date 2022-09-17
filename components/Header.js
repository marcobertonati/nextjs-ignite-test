import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles.container && styles.fixedNavbar}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className="container__icon-navbar">
              <Image
                className="icon-navbar"
                alt="menu"
                width="24px"
                height="24px"
                src="/svg/menu.svg"
                style={{ filter: "invert(100%)" }}
              />
              <Image
                className="icon-navbar"
                alt="logo"
                width="32px"
                height="32px"
                src="/svg/logo.svg"
                style={{ filter: "invert(100%)" }}
              />
            </div>

            <div className="container__icon-navbar">
              <Image
                className="icon-navbar"
                alt="search"
                width="32px"
                height="32px"
                src="/svg/search.svg"
                style={{ filter: "invert(100%)" }}
              />
              <Image
                className="icon-navbar"
                alt="cart"
                width="32px"
                height="32px"
                src="/svg/cart.svg"
                style={{ filter: "invert(100%)" }}
              />
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
