import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Card({ product }) {
  return (
    <article
      key={product.name}
      className={styles.container && styles.singleCard}
    >
      <Image
        src={`/img/${product.img}`}
        alt={product.name}
        width={"100%"}
        height={"100%"}
        layout={"responsive"}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <button>AGREGAR</button>
    </article>
  );
}
