import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ModalFilter from "./ModalFilter";
import styles from "../styles/Home.module.scss";

export default function PageLayout({
  children,
  beerList,
  typeOfBeers,
  setBeers,
  stateModal,
  setStateModal,
  quantityOfTypesSelected,
  setQuantityOfTypesSelected,
  title = "Default - Ignite Drink Store",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Challenge for candidate to frontend job"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />

      {stateModal ? null : (
        <ModalFilter
          beerList={beerList}
          typeOfBeer={typeOfBeers}
          setBeers={setBeers}
          stateModal={stateModal}
          setStateModal={setStateModal}
          quantityOfTypesSelected={quantityOfTypesSelected}
          setQuantityOfTypesSelected={setQuantityOfTypesSelected}
        />
      )}

      {stateModal ? (
        <div className={styles.fixedButton}>
          <button onClick={() => setStateModal(!stateModal)}>
            FILTRAR {quantityOfTypesSelected}
          </button>
        </div>
      ) : null}
    </>
  );
}
