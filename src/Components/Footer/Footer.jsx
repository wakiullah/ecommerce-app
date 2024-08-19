import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'


export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer_logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <div className="footer_nav">
                <ul>
                    <li>Company</li>
                    <li>Product</li>
                    <li>Office</li>
                    <li>About </li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer_social">
                <div>
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div>
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div>
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <hr />
            <div className='copyright'>
                <p>Copyright 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}
