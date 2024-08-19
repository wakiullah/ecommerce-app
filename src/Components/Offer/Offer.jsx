import React from 'react'
import './Offer.css'
import exclusive_img from '../../assets/exclusive_image.png'

export default function Offer() {
    return (
        <div className='offer'>
            <div className="offer_left">
                <h1>Exclusive</h1>
                <h1>Offer For You</h1>
                <p>Only on best seller product</p>
                <button>Check Now</button>
            </div>
            <div className="offer_right">
                <img src={exclusive_img} alt="" />
            </div>
        </div>
    )
}
