import React from 'react'
import products from '../data/Product'
import ProductListing from './ProductListing'

const Electronics = () => {
   const electrnicProduct=products.filter(product=>product.category==="Electronics")
  return (
    <div>
       <h2>Electronics</h2>
       <ProductListing products={electrnicProduct}/>

    </div>
  )
}

export default Electronics
