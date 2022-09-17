import styles from "../styles/Home.module.scss";

import Image from "next/image";

import { useState } from "react";

export default function ModalFilter({
  typeOfBeer,
  beerList,
  setBeers,
  setStateModal,
  stateModal,
  quantityOfTypesSelected,
  setQuantityOfTypesSelected,
}) {
  // const [quantityOfTypesSelected, setQuantityOfTypesSelected] = useState(null);
  
  const [stateCleanButton, setstateCleanButton] = useState(false);

  const onHandleFilter = () => {
    const nodeList = document.querySelectorAll("input");
    const nodeListToArray = Array.apply(null, nodeList);
    const inputThatWasSelected = [];
    nodeListToArray.forEach((inputSelected) => {
      if (inputSelected.checked) {
        inputThatWasSelected.push(inputSelected.value);
      }
    });

    if (inputThatWasSelected.length !== 0) {
      const beerSelected = [];
      inputThatWasSelected.forEach((inputType) => {
        typeOfBeer.forEach((types) => {
          if (inputType == types.filterId) {
            beerSelected.push(...types.beers);
          }
        });
      });
      setBeers(beerSelected);
      setStateModal(!stateModal);
    } else {
      setQuantityOfTypesSelected(null);
      setBeers(beerList);
      setStateModal(!stateModal);
    }
  };

  const onHandleCleanFilter = () => {
    const nodeList = document.querySelectorAll("input");
    const nodeListToArray = Array.apply(null, nodeList);
    nodeListToArray.forEach((input) => (input.checked = false));
    setBeers(beerList);
    setStateModal(!stateModal);
    setQuantityOfTypesSelected(null);
  };

  /*Check if an input was selected to set the state of the botton clean */
  const onHandleChangeForm = () => {
    const nodeList = document.querySelectorAll("input");
    const nodeListToArray = Array.apply(null, nodeList);
    const inputThatWasSelected = [];
    nodeListToArray.forEach((inputSelected) => {
      if (inputSelected.checked) {
        inputThatWasSelected.push(inputSelected.value);
      }
    });

    if (inputThatWasSelected.length === 0) {
      setQuantityOfTypesSelected(null);
      setstateCleanButton(false);
    } else {
      setQuantityOfTypesSelected(inputThatWasSelected.length);
      setstateCleanButton(true);
    }
  };

  return (
    <div className={styles.overlayModal}>
      <div className={styles.containerModal}>
        <h5>Filtros</h5>
        <button onClick={onHandleCleanFilter} className={styles.closeModal}>
          <Image alt="menu" width="24px" height="24px" src="/svg/close.svg" />
        </button>

        <form className={styles.formContainer} onChange={onHandleChangeForm}>
          {typeOfBeer.map((oneType) => {
            return (
              <label key={oneType.filterId}>
                <input
                  type="checkbox"
                  id={oneType.filterId}
                  value={oneType.filterId}
                />{" "}
                {oneType.type.toUpperCase()}
              </label>
            );
          })}{" "}
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonClean}
              onClick={onHandleCleanFilter}
              disabled={!stateCleanButton}
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
