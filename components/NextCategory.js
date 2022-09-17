import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function NextCategory() {
  return (
    <div className={styles.container}>
      <section className={styles.nextCategoryContainer}>
        <div>
          <p>Sigue marcando</p>
          <h6>Vinos</h6>
        </div>

        <div className={styles.nextCategoryArrow}>
          <Image
            className="icon-navbar"
            alt="arrow-right"
            width="24px"
            height="24px"
            src="/svg/arrow-right.svg"
          />
        </div>
      </section>
    </div>
  );
}
