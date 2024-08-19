// import React from 'react'
import './Popular.css';
import data_product from '../../assets/data'
import Item from '../Item/Item';
import SectionTIttle from '../SectionTIttle/SectionTIttle';

function Popular() {
    return (
        <div className='popular'>
            <SectionTIttle tittle={'POPULAR IN WOMEN'} />

            <div className="popular_item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}

export default Popular