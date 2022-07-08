import React from 'react';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="card bg-dark text-white border-0">
                <img className="card-img" src="/assests/background.jpg" alt="background" height={550} />
                <div className="card-img-overlay">
                    <div className="container text-center">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Season New Fashion</h5>
                        <p className="card-text lead fs-2 fw-normal">Check it Out !!</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;