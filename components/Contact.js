import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function NextCategory() {
  return (
    <div className={styles.container && styles.contactContainer}>
      <section className={styles.contact}>
        <div>
          <p>¿Podemos ayudarle?</p>
        </div>
        <div className={styles.containerIconContact}>
          <div>
            <div className={styles.iconContact}>
              <Image
                className="icon-contact"
                alt="chat"
                width="24px"
                height="24px"
                src="/svg/intercom.svg"
              />
            </div>
            <p>CHAT</p>
          </div>

          <div>
            <div className={styles.iconContact}>
              <Image
                className="icon-contact"
                alt="telephone"
                width="24px"
                height="24px"
                src="/svg/phone.svg"
              />
            </div>
            <p>LLAMAR</p>
          </div>
        </div>
      </section>
    </div>
  );
}
