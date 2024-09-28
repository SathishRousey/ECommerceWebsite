import React from 'react'
import products from '../data/Product'
import ProductListing from './ProductListing'

const Accessories = () => {
    const accessoriesProducts=products.filter(product=>product.category==="Accessories")
  return (
    <div>
        <h2>Accessories</h2>
     <ProductListing products={accessoriesProducts}/> 
    </div>
  )
}

export default Accessories
