import '../styles/pages/category.css';
import { useParams } from "react-router-dom";
import categoryData from '../data/category.json';
import ProductCard from '../components/ProductCard';


export default function Category() {

    const { Category } = useParams();
    const { categoryHeroImage, desc, products } = categoryData.find(
        (item) => item.title === Category
    );
    const CategoryImgURL = require(`../assets/${categoryHeroImage}`);
    const ProductList = products.map((recs) => (
        <ProductCard key={recs.id} Productdata={recs} />
    ));

    return (
        <div className="category">
            <img id="category-img" src={CategoryImgURL} alt="vegetable in bowl" />
            <div className="category-page">

                <h1>{Category}</h1>
                <p>{desc}</p>
            </div>
            <div className="product-list">
                {ProductList}
            </div>
        </div>
    );
};