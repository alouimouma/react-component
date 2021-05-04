import React from 'react'
import image from './imagem.jpg'


function Photo() {
    return (
        <div >
            <img src={image} className="image" alt="my im" />
        </div>
    );
}

export default Photo
