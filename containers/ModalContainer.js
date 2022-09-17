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
  const [stateCleanButton, setStateCleanButtonModal] = useState(false);

  /* Handle that filter by the type of beers selected by the user */
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
      localStorage.setItem(
        "type-filtered",
        JSON.stringify(inputThatWasSelected)
      );
      const typeOfBeersSelectedByUser = beerList.filter((beer) =>
        inputThatWasSelected.includes(String(beer.filterId))
      );
      setBeers(typeOfBeersSelectedByUser);
      setStateModal(!stateModal);
    } else {
      localStorage.setItem("type-filtered", JSON.stringify([]));
      setQuantityOfTypesSelected(0);
      setBeers(beerList);
      setStateModal(!stateModal);
    }
  };

  /* Clean the filter and set all beers */
  const onHandleCleanFilter = (event) => {
    localStorage.setItem("type-filtered", JSON.stringify([]));
    setBeers(beerList);
    setStateModal(!stateModal);
    setQuantityOfTypesSelected(0);
  };

  /*Change the state of modal */
  const onHandleCloseModal = (event) => {
    setStateModal(false);
  };

  /*Check if an input was selected to set the state of the clean button. If an checkbox was selected then able the clean button, if not, disable.*/
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
      setStateCleanButtonModal(!stateCleanButton);
    } else {
      setQuantityOfTypesSelected(inputThatWasSelected.length);
      setStateCleanButtonModal(!stateCleanButton);
    }
  };

  /* Handle that check if exist in LocalStorga a previous filter selection. If exist result TRUE and set CHECK by default in the input */
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
