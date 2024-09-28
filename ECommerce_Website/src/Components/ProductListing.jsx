import React from 'react';
import { Link } from 'react-router-dom';
const ProductListing = ({products}) => {
    return (
        <div className='product-page'>
       
                   {products.map(product => {
                    let quantityMessage="";
                    let quantityStyle={};

                    if(product.inStock >0){
                        quantityMessage=`${product.inStock} more left`;
                        quantityStyle = { color: "green" };

                    
                    if(product.inStock===1){
                        quantityMessage=`Hurry Up! Only one left`;
                        quantityStyle = { color: "red" };

                    }
                    else if(product.inStock<5){
                  quantityStyle = { color: "red" };

                    }
                }
                    else{
                        quantityMessage="out of stock";
                        quantityStyle = { color: "red" };

                    }
                    return(
                <div key={product.id} className='card'>
                        <Link to={`/products/${product.id}`}>
                       <img src={product.imageUrl} alt={product.name} />
                       </Link>
                       <Link to={`/products/${product.id}`} className='product-name'>

                        {product.name}
                        </Link>
                      
                       <pre>${product.offeredPrice}INR <strike>${product.price}</strike><br /> <span style={quantityStyle}>
                        {quantityMessage}
                       </span>
                       </pre>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star-half-stroke"></i><br />
                       <button  style={{backgroundColor:product.inStock ? 'green' : 'red'}}>
                           {
                               product.inStock>0 ? "Add to Cart" : "Out of Stock"
                           }
                           </button>
                   </div>
                    );
                   
})}
            </div>
    );
};

export default ProductListing;
