import packageInfo from "../../../products.json";

export default function handler(req, res) {
  const products = packageInfo;
  res.status(200).json(products);
}
