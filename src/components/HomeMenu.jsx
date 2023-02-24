import CategoryData from '../data/category.json';
import HomeMenuCard from './HomeMenuCard.jsx';
import "../styles/components/homeMenu.css";


export default function HomeMenu() {
    const MenuItem = CategoryData.map((recs) => (
        <HomeMenuCard key={recs.id} MenuItem={recs} />
    ));
    return (
        <div id="category">
            {MenuItem}
        </div>
    )
};