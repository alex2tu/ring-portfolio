import React from 'react';
import './RingCell.css';

function RingCell({ ring, customClass }) {
    return (
        <div className={`ring-cell ${customClass || ''}`}>
            <img src={ring.image} alt={ring.description} />
            <div className="overlay">
                <div className='ring-title'>{ring.name}</div>
                {/* <p>{ring.description}</p> */}
            </div>
        </div>
    );
}

export default RingCell;