import React, { useContext } from 'react'
import starIcon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
export default function ProductDisplay({ product }) {

    const { addToCart } = useContext(ShopContext);

    return (
        <div className='product_display'>
            <div className="display_left">
                <div className="small_image">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="big_image">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="display_right">
                <h2>{product.name}</h2>
                <div className='review'>
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <span>(234)</span>
                </div>
                <div className='product_price'>
                    <p className='old_price'>${product.old_price}</p>
                    <p className='new_price'>${product.new_price}</p>
                </div>
                <p className='product_des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro quo quod vel, et eligendi omnis commodi vitae sint, nesciunt aspernatur incidunt voluptate illum ipsum ullam?</p>
                <div className='product_size'>
                    <p>Select Size</p>
                    <div className='product_sizes'>
                        <div className='s'>S</div>
                        <div className='s'>M</div>
                        <div className='s'>L</div>
                        <div className='s'>XL</div>
                        <div className='s'>XXL</div>
                    </div>
                </div>
                <button className='cart_button' onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className='category'> <span>Category:</span>{` ${product.category}`}</p>
                <p className='tags'><span>Tags: </span> Mordan, Leatest</p>
            </div>
        </div>
    )
}
