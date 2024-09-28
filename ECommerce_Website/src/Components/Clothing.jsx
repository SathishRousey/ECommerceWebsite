import React from 'react'
import products from '../data/Product'
import ProductListing from './ProductListing'

const Clothing = () => {
  const clothProducts=products.filter(product=>product.category==="Clothing")
  return (
    <div>
      <h2>Clothing</h2>
      <ProductListing products={clothProducts}/>
    </div>
  )
}

export default Clothing
