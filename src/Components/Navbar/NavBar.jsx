import './Navbar.css'
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


export default function NavBar(params) {
    const { getTotalItem } = useContext(ShopContext)
    const [Menu, setMenu] = useState('shop')
    const isLoggedIn = localStorage.getItem('isloggedIn')
    console.log(isLoggedIn);

    const logOutHandler = () => {
        console.log('logour');

        localStorage.removeItem('isLoggedIn')
        console.log(localStorage.getItem('isLoggedIn'));

    }

    return (
        <div className='Nav'>
            <div className='imageWrapper'>
                <Link to={'/'}>
                    <img className='NavImage' src={logo} alt="" />
                    <p>Shopper</p>
                </Link>
            </div>
            <div className='NavList'>
                <ul>
                    <li onClick={() => setMenu('shop')}><Link to={'/'}>Shop</Link>  {Menu === 'shop' ? <hr></hr> : <></>}</li>
                    <li onClick={() => setMenu('men')}><Link to={'/men'}> Men</Link>   {Menu === 'men' ? <hr></hr> : <></>}</li>
                    <li onClick={() => setMenu('women')}> <Link to={'/women'}> Women</Link>  {Menu === 'women' ? <hr></hr> : <></>}</li>
                    <li onClick={() => setMenu('kids')}><Link to={'/kids'}> Kids</Link>  {Menu === 'kids' ? <hr></hr> : <></>}</li>
                </ul>
            </div>
            <div className='Nav_Login_Cart'>
                {isLoggedIn === 'true' ? <button onClick={logOutHandler()}>LogOut </button> : <button><Link to={'/login'}>Login</Link></button>}
                <Link to={'/cart'} className='nav_cart_button'>
                    <img src={cart_icon} alt="" />
                    <div className='cart_counter'>{getTotalItem()}</div>
                </Link>
            </div>
        </div>
    )
}
