import { Link } from 'react-router-dom';
import '../styles/components/homeMenuCard.css';


export default function HomeMenuCard({ MenuItem }) {

    const { title, categoryImage, desc } = MenuItem;
    const ImgURL = require(`../assets/${categoryImage}`);

    return (

        <div className="category-card" id='category-card'>
            <div className="category-left">
                <img src={ImgURL} alt={title} />
            </div>
            <div className="category-right">
                <h2>{title}</h2>
                <p>{desc}</p>
                <Link to={`${title}`}>
                    <button className='category-btn'>View More</button>
                </Link>
            </div>
        </div>
    );
};