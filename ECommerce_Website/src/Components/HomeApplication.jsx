import React from 'react'
import products from '../data/Product'
import ProductListing from './ProductListing'

const HomeApplication = () => {
    const homeProducts=products.filter(product=>product.category==="Home Appliances")
  return (
    <div>
        <h2>Home Application</h2>
       <ProductListing products={homeProducts}/>
    </div>
  )
}

export default HomeApplication
