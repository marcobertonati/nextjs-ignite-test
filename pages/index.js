/* Layout: Head, Header & Footer */
import PageLayout from "../components/PageLayout";

/* Containers */
import ModalContainer from "../containers/ModalContainer";

/* Components */
import GridProducts from "../components/GridProducts";
import NextCategory from "../components/NextCategory";
import Contact from "../components/Contact";

/* Module */
import { useState } from "react";

/* Fetch & Data */
import { getTypesOfBeers, getAllBeers } from "../services/beerService";

export default function Home({
  beerList = "No beers founded",
  typeOfBeers = "No type beers founded",
}) {
  const [beers, setBeers] = useState(beerList);
  const [stateModal, setStateModal] = useState(true);
  const [quantityOfTypesSelected, setQuantityOfTypesSelected] = useState(null);

  return (
    <>
      <PageLayout
        beerList={beerList}
        typeOfBeers={typeOfBeers}
        setBeers={setBeers}
        stateModal={stateModal}
        setStateModal={setStateModal}
        quantityOfTypesSelected={quantityOfTypesSelected}
        setQuantityOfTypesSelected={setQuantityOfTypesSelected}
        title="Home - Ignite Drink Store"
      >
        {beerList ? (
          <GridProducts beers={beers} />
        ) : (
          <span>NO SE ENCONTRARON CERVEZAS.</span>
        )}

        {/* <ModalContainer
          beerList={beerList}
          typeOfBeers={typeOfBeers}
          setBeers={setBeers}
          stateModal={stateModal}
          setStateModal={setStateModal}
          quantityOfTypesSelected={quantityOfTypesSelected}
          setQuantityOfTypesSelected={setQuantityOfTypesSelected}
        /> */}
        <NextCategory />
        <Contact />
      </PageLayout>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const beerList = await getAllBeers();
    const typeOfBeers = await getTypesOfBeers();
    return {
      props: {
        beerList: beerList,
        typeOfBeers: typeOfBeers,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
  }
}
