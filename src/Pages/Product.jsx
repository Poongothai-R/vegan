import { Link, useParams } from "react-router-dom";
import Ingredients from "../components/Ingredients";
import CategoryData from "../data/category.json";
import ProductItem from "../components/ProductItem";
import Nutrition from "../components/Nutrition";
import "../styles/pages/Product.css";

export default function Product() {
  const { Category, id } = useParams();
  const { products } = CategoryData.find((item) => item.title === Category);
  const ProductDetail = products.find((recs) => recs.id === Number(id));

  return (
    <div className="product-page">
      <div className="page-content">
        <ProductItem ProductData={ProductDetail} />
        <Ingredients ProductData={ProductDetail} />
        <Nutrition ProductData={ProductDetail} />
        <Link to={`/${Category}`}>
          <button id="back-btn">Go Back</button>
        </Link>
      </div>
    </div>
  );
}
