import packageInfo from "../../../products.json";

export default function handler(req, res) {
  const { products } = packageInfo;

  const typeOfBeersWithDuplicates = products.map((beer) => beer.filterId);
  const removeDuplicated = new Set(typeOfBeersWithDuplicates);
  const typeOfBeersRemoveDuplicates = [...removeDuplicated];
  const beersByTypesWithoutBeers = typeOfBeersRemoveDuplicates.map((type) => {
    if (type == 1) return { type: "rubia", filterId: type, beers: [] };
    if (type == 2) return { type: "morena", filterId: type, beers: [] };
    if (type == 3) return { type: "roja", filterId: type, beers: [] };
  });

  products.forEach((beer) => {
    beersByTypesWithoutBeers.forEach((type) => {
      if (beer.filterId === type.filterId) {
        type.beers.push(beer);
      }
    });
  });

  res.status(200).json(beersByTypesWithoutBeers);
}
