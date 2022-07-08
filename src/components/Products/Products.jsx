import React, { useState, useEffect } from "react";
import products from "./data";
import {NavLink, useNavigate } from 'react-router-dom';
import "./Products.css";

const Products = () => {

    const [product, setProduct] = useState([]);
    const [filter, setfilter] = useState([]);

    const navigate = useNavigate()
    useEffect(() => {
        setProduct(products);
    }, []);

    const filterProduct = (cat) => {
        const updatedList = products.filter(item => item.category === cat);
        console.log(updatedList);
        setfilter(updatedList);
    }

    const handleRoute = (id) => {
        navigate(`/product/${id}`);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-4 pb-4 ">
                    <button className="btn btn-outline-dark me-2" onClick={() => setfilter(products)} >All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Men Wear")}>Men Wear</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Women Wear")}>Women Wear</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Kids Wear")}>Kids Wear</button>
                </div>
                {filter.length > 0 ? filter.map(product => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card" >
                            <img className="card-img-top" src={product.image} alt={product.title} height={250} />
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text lead fw-bold">$ {product.price}</p>
                                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                            </div>
                        </div>
                    </div>)) :
                    products.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4" key={product.id}>
                                    <div className="card " >
                                        <img className="card-img-top" src={product.image} alt={product.title} height={250} />
                                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text lead fw-bold">$ {product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-12 mb-4">
                    <h1 className="display-6 fw-bold text-center">Latest Products</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <ShowProducts />
            </div>
        </div>

    );
}

export default Products;
