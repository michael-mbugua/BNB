import React from 'react';
import './Card.css'

function Card({ src, house_type, description, price }) {
    return (
        <div className='card'>
            <img src={src} alt="" width={200} />
            <div className="card__info">
                <h2>{house_type}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
            <button className='book'>Book house</button>
        </div>
    )
}

export default Card
