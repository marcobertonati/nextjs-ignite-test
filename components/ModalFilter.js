import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function ModalFilter({
  typeOfBeers,
  quantityOfTypesSelected,
  onHandleCleanFilter,
  onHandleCloseModal,
  onHandleChangeForm,
  onHandleFilter,
  onHandleHasChecked,
}) {
  return (
    <div className={styles.overlayModal}>
      <div className={styles.containerModal}>
        <h5>Filtros</h5>
        <button onClick={onHandleCloseModal} className={styles.closeModal}>
          <Image alt="close" width="24px" height="24px" src="/svg/close.svg" />
        </button>

        <form className={styles.formContainer} onChange={onHandleChangeForm}>
          {typeOfBeers.map((oneType) => {
            return (
              <label key={oneType.filterId}>
                <input
                  type="checkbox"
                  id={oneType.filterId}
                  value={oneType.filterId}
                  defaultChecked={onHandleHasChecked(oneType.filterId)}
                />{" "}
                {oneType.type.toUpperCase()}
              </label>
            );
          })}{" "}
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonClean}
              onClick={onHandleCleanFilter}
              disabled={quantityOfTypesSelected === 0}
            >
              LIMPIAR{" "}
            </button>
            <button className={styles.buttonFilter} onClick={onHandleFilter}>
              FILTRAR{" "}
              <Image
                alt="menu"
                width="24px"
                height="24px"
                src="/svg/filters.svg"
                style={{ filter: "invert(100%)" }}
              />
              {quantityOfTypesSelected > 0 ? (
                <span>{quantityOfTypesSelected}</span>
              ) : null}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
