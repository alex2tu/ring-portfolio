import React from 'react';
import './RingGallery.css';
import RingCell from './RingCell';
import rings from './ringData';

function RingGallery() {
    return (
        <div className="ring-gallery">
            <div className="ring-container">
                {rings.map((ring) => (
                    <RingCell key={ring.id} ring={ring} />
                ))}
            </div>
        </div>
    );
}

export default RingGallery;
