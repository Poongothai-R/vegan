import { Link } from "react-router-dom";
import "../styles/components/ProductCard.css";

export default function ProductCard({ Productdata }) {
  const { id, name, shortDescription, image } = Productdata;
  const ProductImgURL = require(`../assets/${image}`);

  return (
    <div className="product-card" id="product-card">
      <div className="product-content">
        <Link to={`${id}`}>
          <div className="product-image">
            <img src={ProductImgURL} alt={name} />
          </div>
          <div className="product-desc">
            <h2>{name}</h2>
            <p>{shortDescription}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
