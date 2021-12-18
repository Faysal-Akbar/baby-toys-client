import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0, 5)))
    }, [])
    return (
        <div className="container mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-10 text-black">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;