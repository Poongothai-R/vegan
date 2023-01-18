import CategoryData from '../data/category.json';
import HomeMenuCard from './HomeMenuCard.jsx';


export default function HomeMenu() {

    const MenuItem = CategoryData.map((recs) => (
        <HomeMenuCard key={recs.id} MenuItem={recs} />
    ));

    return (
        <div className="category">
            {MenuItem}
        </div>
    )
};