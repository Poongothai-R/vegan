import '../styles/components/productItem.css';


export default function ProductItem({ ProductData }) {

    const { image, name, longDescription } = ProductData;
    const itemImg = require(`../assets/${image}`);
    return (
        <div className="product-item">
            <img src={itemImg} alt={name} />
            <h1>{name}</h1>
            <p>{longDescription}</p>
        </div>
    );
};