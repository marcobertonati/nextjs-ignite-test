import packageInfo from "../../../products.json";

export default function handler(req, res) {
  const { products } = packageInfo;

  const arrayTypesOfBeers = [];

  products.forEach((beer) => {
    if (arrayTypesOfBeers.length === 0) {
      if (beer.filterId === 1) {
        arrayTypesOfBeers.push({
          filterId: beer.filterId,
          type: "rubia",
          beers: [],
        });
      }

      if (beer.filterId === 2) {
        arrayTypesOfBeers.push({
          filterId: beer.filterId,
          type: "morena",
          beers: [],
        });
      }

      if (beer.filterId === 3) {
        arrayTypesOfBeers.push({
          filterId: beer.filterId,
          type: "roja",
          beers: [],
        });
      }
    } else {
      const hasTypeBeer = arrayTypesOfBeers.some((type) => {
        return type.filterId === beer.filterId;
      });

      if (!hasTypeBeer) {
        if (beer.filterId === 1) {
          arrayTypesOfBeers.push({
            filterId: beer.filterId,
            type: "rubia",
            beers: [],
          });
        }

        if (beer.filterId === 2) {
          arrayTypesOfBeers.push({
            filterId: beer.filterId,
            type: "morena",
            beers: [],
          });
        }

        if (beer.filterId === 3) {
          arrayTypesOfBeers.push({
            filterId: beer.filterId,
            type: "roja",
            beers: [],
          });
        }
      }
    }
  });

  products.forEach((beer) => {
    arrayTypesOfBeers.forEach((type) => {
      if (beer.filterId === type.filterId) {
        type.beers.push(beer);
      }
    });
  });

  res.status(200).json(arrayTypesOfBeers);
}
