import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/products')
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText)
              }
            return res.json()
        })
        .then(data => setAllProducts(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h1 className="text-3xl font-bold my-10 text-blue-400">Our All Products</h1>
            <div className="container mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                allProducts.map(product => <AllProduct
                    key={product._id}
                    product={product}
                ></AllProduct>)
            }
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;