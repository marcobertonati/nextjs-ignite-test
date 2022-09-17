import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function ButtonFilter({
  setStateModal,
  stateModal,
  quantityOfTypesSelected,
}) {

  return (
    <div className={styles.fixedButton}>
      <button
        className={styles.buttonContainer}
        onClick={() => setStateModal(!stateModal)}
      >
        <span>FILTRAR</span>
        <Image
          alt="filter"
          width="24px"
          height="24px"
          src="/svg/filters.svg"
          style={{ filter: "invert(100%)" }}
        />

        {quantityOfTypesSelected === 0 ? null : (
          <span className={styles.buttonQuantity}> {quantityOfTypesSelected}</span>
        )}
      </button>
    </div>
  );
}
