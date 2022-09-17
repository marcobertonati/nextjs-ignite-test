/*Componentes */
import ModalFilter from "../components/ModalFilter";
import ButtonFilter from "../components/ButtonFilter";

/*Modules */
import { useState, useEffect } from "react";

export default function ModalContainer({
  beerList,
  typeOfBeers,
  setBeers,
  stateModal,
  setStateModal,
  quantityOfTypesSelected,
  setQuantityOfTypesSelected,
}) {
  const [stateCleanButton, setstateCleanButton] = useState(false);

  const onHandleFilter = (event) => {
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
      localStorage.setItem(
        "type-filtered",
        JSON.stringify(inputThatWasSelected)
      );
      inputThatWasSelected.forEach((inputType) => {
        typeOfBeers.forEach((types) => {
          if (inputType == types.filterId) {
            beerSelected.push(...types.beers);
          }
        });
      });
      setBeers(beerSelected);
      setStateModal(!stateModal);
    } else {
      setQuantityOfTypesSelected(0);
      setBeers(beerList);
      setStateModal(!stateModal);
      localStorage.setItem("type-filtered", JSON.stringify([]));
    }
  };

  const onHandleCleanFilter = (event) => {
    setBeers(beerList);
    setStateModal(!stateModal);
    setQuantityOfTypesSelected(0);
    localStorage.setItem("type-filtered", JSON.stringify([]));
  };

  const onHandleCloseModal = (event) => {
    setStateModal(false);
  };

  /*Check if an input was selected to set the state of the botton clean */
  const onHandleChangeForm = (event) => {
    const nodeList = document.querySelectorAll("input");
    const nodeListToArray = Array.apply(null, nodeList);
    const inputThatWasSelected = [];
    nodeListToArray.forEach((inputSelected) => {
      if (inputSelected.checked) {
        inputThatWasSelected.push(inputSelected.value);
      }
    });
    if (inputThatWasSelected.length === 0) {
      setQuantityOfTypesSelected(0);
      setstateCleanButton(false);
    } else {
      setQuantityOfTypesSelected(inputThatWasSelected.length);
      setstateCleanButton(true);
    }
  };

  const onHandleHasChecked = (id) => {
    const typeFilteredOnLocalStorage = JSON.parse(
      localStorage.getItem("type-filtered")
    );
    const founded = typeFilteredOnLocalStorage.some(
      (typeFiltered) => typeFiltered == id
    );
    return founded;
  };

  useEffect(() => {
    const filteredOnLocalStorage = localStorage.getItem("type-filtered");

    if (filteredOnLocalStorage === null) {
      localStorage.setItem("type-filtered", JSON.stringify([]));
    } else {
      setQuantityOfTypesSelected(JSON.parse(filteredOnLocalStorage).length);
    }
  }, []);

  return (
    <>
      {stateModal ? (
        <ModalFilter
          onHandleCleanFilter={onHandleCleanFilter}
          onHandleChangeForm={onHandleChangeForm}
          onHandleCloseModal={onHandleCloseModal}
          onHandleFilter={onHandleFilter}
          onHandleHasChecked={onHandleHasChecked}
          quantityOfTypesSelected={quantityOfTypesSelected}
          typeOfBeers={typeOfBeers}
        />
      ) : (
        <ButtonFilter
          setStateModal={setStateModal}
          stateModal={stateModal}
          quantityOfTypesSelected={quantityOfTypesSelected}
        />
      )}
    </>
  );
}
