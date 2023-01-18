import '../components/ProductItem';

export default function Ingredients({ ProductData }) {
    const ingredientsList = ProductData.ingredients.map((data, index) => (
        <li key={index}>{data}</li>
    ));
    return (
        <div className="Ingredient-Items">
            <h2> Ingredients </h2>
            <ul>{ingredientsList}</ul>
        </div>
    );
};