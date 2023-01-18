export default function Nutrition({ ProductData }) {
    const NutritionData = ProductData.nutrition.map((data) => (
        <tr key={data.id} data={data}>
          <td>{data.name}</td>
          <td>{data.value}g</td>
        </tr>
    ));

    return (
        <div className="nutrition-page">
            <div className="nutrition-banner">
                    <div className="tab-title">
                        <h2> Nutrition Facts</h2>
                        <p>Serving Size 1/2 cup (about 82g) </p>
                        <p>Serving Per Container 4</p>
                    </div>
                <h4> Amount per serving <span>- 200gms</span></h4>
                <div className="nutrition-table">
                <table>
                    <tr>
                        <th> Nutrients</th>
                        <th> Value </th>
                    </tr>
                    {NutritionData}
                </table>
                </div>
            </div>
        </div>
    )
};