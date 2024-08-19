import React from 'react'
import SectionTIttle from '../SectionTIttle/SectionTIttle'
import data_product from '../../assets/data';
import Item from '../Item/Item';
import './RelatedProducts.css'
export default function RelatedProducts() {

    return (
        <div className='relatedSection'>
            <SectionTIttle tittle={'RELATED PRODUCTS'} />
            <div className='related_prducts'>
                {data_product.map((e, i) => <Item key={i} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />)}
            </div>

        </div>
    )
}
