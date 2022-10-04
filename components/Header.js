import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles.container && styles.fixedNavbar}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.container__iconNavbar}>
              <div className={styles.iconNavbarSingle}>
                <Image
                  alt="menu"
                  width="20px"
                  height="20px"
                  src="/svg/menu.svg"
                  style={{ filter: "invert(100%)" }}
                />
              </div>

              <div className={styles.iconNavbarSingle}>
                <Image
                  alt="logo"
                  width="32px"
                  height="32px"
                  src="/svg/logo.svg"
                  style={{ filter: "invert(100%)" }}
                />
              </div>
            </div>

            <div className={styles.container__iconNavbar}>
              <div className={styles.iconNavbarSingle}>
                {" "}
                <Image
                  alt="search"
                  width="20px"
                  height="20px"
                  src="/svg/search.svg"
                  style={{ filter: "invert(100%)" }}
                />
              </div>

              <div
                className={styles.iconNavbarSingle && styles.iconNavbar__cart}
              >
                {" "}
                <Image
                  alt="cart"
                  width="20px"
                  height="20px"
                  src="/svg/cart.svg"
                  style={{ filter: "invert(100%)" }}
                />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
