import React, { useContext } from 'react'
import './CSS/Product.css'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProdcutDisplay/ProductDisplay';
import Description from '../Components/DescriptionBox/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams()
  const findProduct = all_product.find((e) => e.id === Number(productId))
  return (
    <div className='product'>
      <BreadCrum prodcut={findProduct} />
      <ProductDisplay product={findProduct} />
      <Description />
      <RelatedProducts  />
    </div>
  )
}
