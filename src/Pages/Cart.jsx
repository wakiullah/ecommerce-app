import { useContext } from 'react'
import Checkout from '../Components/Checkout/Checkout'
import './CSS/Cart.css'
import { ShopContext } from '../Context/ShopContext';

export default function Cart() {
const { all_product, cartItems, removeFromCart,getTotalCartAmmount } = useContext(ShopContext)



    return (
        <div className='cart'>
            <Checkout />
        </div>
    )
}