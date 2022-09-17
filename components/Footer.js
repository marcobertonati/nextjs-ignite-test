import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footerContainer} style={{ color: "red" }}>
        <nav>
          <ul>
            <li>SOBRE NOSOTROS</li>
            <li>MEDIDAS DE SEGURIDAD (COVID-19)</li>
            <li>CÓMO MERCAR</li>
            <li>PROVEEDORES</li>
            <li>CONTÁCTENOS</li>
            <li>ZONA DE COBERTURA</li>
          </ul>
        </nav>

        <div>
          <span className={styles.containerSocialMediaIcon}>
            <Image
              className="icon-navbar"
              alt="menu"
              width="24px"
              height="24px"
              src="/svg/instagram.svg"
              style={{ filter: "invert(100%)" }}
            />
          </span>
        </div>

        <p>POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES</p>
      </footer>
    </div>
  );
}
