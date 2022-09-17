export async function getTypesOfBeers() {
  try {
    const data = await fetch("http://localhost:3000/api/products/typeBeers");
    const typeBeers = await data.json();
    return typeBeers;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllBeers() {
  try {
    const data = await fetch("http://localhost:3000/api/products/beers");
    const { products } = await data.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}
