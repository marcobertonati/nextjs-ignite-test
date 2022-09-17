import Card from "./Card";
import styles from "../styles/Home.module.scss";

export default function GridProducts({ beers }) {
  return (
    <div className={styles.container}>
      <section className={styles.container__tableProduct}>
        <h2>Cervezas</h2>
        <div className={styles.containerCard}>
          {beers.map((product, index) => {
            return <Card key={index} product={product} />;
          })}
        </div>
      </section>
    </div>
  );
}
