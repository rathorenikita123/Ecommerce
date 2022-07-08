import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/action/index";


const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(removeCart(item));
    }

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-4 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button className=" btn-close float-end" aria-label="Close" onClick={() => handleClose(cartItem)} />
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <img src={cartItem.image} alt={cartItem.title} width={400} height={400} />
                        </div>
                        <div className="col-md-6">
                            <h4 className="text-uppercase text-black-50">{cartItem.category}</h4>
                            <h1 className="display-5">{cartItem.title}</h1>
                            <p className="lead fw-bolder"> Rating {cartItem.rating && cartItem.rating.rate}
                                <i className="fa fa-star mx-1"></i>
                            </p>
                            <h3 className="display-6 fw-blod my-4">${cartItem.price}</h3>
                            <p className="lead">{cartItem.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


    return (
        <>
            {state.length !== 0 && state.map(cartItems)}
        </>
    );
}

export default Cart;