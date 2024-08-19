import React from 'react'
import new_collections from './../../assets/new_collections';
import Item from '../Item/Item';
import './NewCollection.css'
import SectionTIttle from '../SectionTIttle/SectionTIttle';

export default function NewCollection() {
    return (
        <div className='new_collection'>
            <SectionTIttle tittle={'New Collection'} />
            <div className="collections">
                {new_collections.map((item, i) => {
                    return <Item name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} key={i} />
                })}
            </div>
        </div>
    )
}
