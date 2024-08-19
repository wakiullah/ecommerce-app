import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({ id, image, name, new_price, old_price }) {
    return (
        <div className='item'>
            <Link to={`/product/${id}`}><img onClick={window.scrollTo(0, 0)} src={image} alt="" /></Link>
            <p>{name}</p>
            <div className='item_price'>
                <div className='item_old_price'>
                    ${old_price}
                </div>
                <div className="item_new_price">
                    ${new_price}
                </div>
            </div>
        </div>
    )
}
