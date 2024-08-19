import React, { useContext } from 'react'
import removeIcon from '../../assets/cart_cross_icon.png'
import './Checkout.css';
import { ShopContext } from '../../Context/ShopContext';

export default function Checkout() {
    const { all_product, cartItems, removeFromCart, getTotalCartAmmount } = useContext(ShopContext)
    let isCartItemEmpty = 0;

    return (
        <div className='checkout'>
            <div className='checkout_items bold'>
                <div>Products</div>
                <div>Tittle</div>
                <div> Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>
                    Remove
                </div>
            </div>
            <hr />

            {all_product.map((e, i) => {
                // console.log(cartItems[e.id]);
                // console.log(cartItems[2]);
                if (Number(cartItems[e.id]) > 0) {
                    isCartItemEmpty = 1;
                    return (
                        <div key={i} className='checkout_items border_bottom'>
                            <div className='checkout_image'><img src={e.image} alt="" /></div>
                            <div>{e.name}</div>
                            <div>${e.new_price}</div>
                            <div className='quantity'><p>{cartItems[e.id]}</p></div>
                            <div>${cartItems[e.id] * e.new_price}</div>
                            <div >
                                <img onClick={() => removeFromCart(e.id)} className='cross_icon' src={removeIcon} alt="" />
                            </div>
                        </div>

                    )


                } else {
                    return
                }
            })}
            {isCartItemEmpty === 0 && <h1 className='margin_top'>YOUR CART IS EMPTY</h1>}

            <div className='cart_bottom'>
                <div className='cart_total'>
                    <h1>Cart Total</h1>
                    <div>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmmount()}</p>
                    </div>
                    <div>
                        <p>Shipping fee</p>
                        <p>free</p>
                    </div>
                    <div className='total_price'>
                        <p>Total</p>
                        <p>${getTotalCartAmmount()}</p>
                    </div>
                </div>
                <div className='promo_code'>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <input type="text" placeholder='Promo Code' name="" id="" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}
