import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import arrow from '../assets/breadcrum_arrow.png'

export default function ShopCategory({ banner, category }) {
  const { all_product } = useContext(ShopContext)

  return (
    <div className='shop_category'>
      <img src={banner} alt="" />
      <div className='category_details'>
        <p><span className='bold'>Showing 1-12</span> out of 36 products</p>
        <button>short by <img src={arrow} alt="" /></button>
      </div>
      <div className='category_products'>
        {all_product.map((product, i) => {
          if (product.category === category) {
            return <Item id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} key={i} />
          }
          else { return null }
        }
        )}
      </div>
      <div className='more_button'>
        <button>
          Explore More
        </button>
      </div>
    </div>
  )
}
