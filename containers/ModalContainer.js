import ModalFilter from "../components/ModalFilter";
import { useState } from "react";

export default function ModalContainer(
  beerList,
  typeOfBeers,
  setBeers,
  stateModal,
  setStateModal,
  quantityOfTypesSelected,
  setQuantityOfTypesSelected
) {
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

  return <ModalFilter />;
}
