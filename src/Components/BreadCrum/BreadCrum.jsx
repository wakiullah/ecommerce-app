import React from 'react'
import arrow_icom from '../../assets/breadcrum_arrow.png'
import './BreadCrum.css'
import { Link } from 'react-router-dom'

export default function BreadCrum({ prodcut }) {

    return (
        <div className='breacdcrum'>
            <Link to={'/'}>HOME</Link> <img src={arrow_icom} /> <Link to={'/'}>SHOP</Link> <img src={arrow_icom} alt="" /><Link to={`/${prodcut.category}`}> {prodcut.category}</Link> <img src={arrow_icom} alt="" /> {prodcut.name}
        </div>
    )
}
