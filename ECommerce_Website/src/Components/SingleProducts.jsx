import React from 'react';
import products from '../data/Product';
import { useParams } from 'react-router-dom';

const SingleProducts = () => {
    const { id } = useParams();
    const singleProduct = products.find((product) => product.id === parseInt(id, 10));

    if (!singleProduct) {
        return <div>Product not found</div>;
    }

    return (
        <div className="ind-page">
            <div className="ind-image">
                <img src={singleProduct.imageUrl} alt={singleProduct.name} />
            </div>
            <div className="ind-details">
                <h3>{singleProduct.name}</h3>
                <p>{singleProduct.description}</p>
                <pre>
                    {`$${singleProduct.offeredPrice} INR`} <strike>${singleProduct.price}</strike>
                </pre>
                <button style={{ backgroundColor: singleProduct.inStock > 0 ? 'green' : 'red' }}>
                    {singleProduct.inStock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    );
};

export default SingleProducts;
