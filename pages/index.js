/* Layout: Head, Header & Footer */
import PageLayout from "../components/PageLayout";

/* Containers */
import ModalContainer from "../containers/ModalContainer";

/* Components */
import GridProducts from "../components/GridProducts";
import NextCategory from "../components/NextCategory";
import Contact from "../components/Contact";

/* Module */
import { useState, useEffect } from "react";

/* Fetch & Data */
import { getTypesOfBeers, getAllBeers } from "../services/beerService";

export default function Home({ beerList = [], typeOfBeers = [] }) {
  const [beers, setBeers] = useState(beerList);
  const [stateModal, setStateModal] = useState(false);
  const [quantityOfTypesSelected, setQuantityOfTypesSelected] = useState(0);

  useEffect(() => {
    const filtersOnLocalStorage = JSON.parse(
      localStorage.getItem("type-filtered")
    );

    if (filtersOnLocalStorage.length > 0) {
      const getBeersFiltered = beers.filter((beer) =>
        filtersOnLocalStorage.includes(String(beer.filterId))
      );
      setBeers(getBeersFiltered);
    }
  }, []);

  return (
    <>
      <PageLayout title="Home - Ignite Drink Store">
        {beerList.length > 0 ? (
          <GridProducts beers={beers} />
        ) : (
          <span>NO SE ENCONTRARON CERVEZAS.</span>
        )}

        <NextCategory />
        <Contact />
      </PageLayout>
      <ModalContainer
        beerList={beerList}
        typeOfBeers={typeOfBeers}
        setBeers={setBeers}
        stateModal={stateModal}
        setStateModal={setStateModal}
        quantityOfTypesSelected={quantityOfTypesSelected}
        setQuantityOfTypesSelected={setQuantityOfTypesSelected}
      />
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
