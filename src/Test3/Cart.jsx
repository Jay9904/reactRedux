import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



export default function Cart() {
    const cartData = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const remove = (itemId) => {
        return dispatch({
            type: "removeFromcart",
            payload: itemId,
        })
    }

    return (
        <>
            <h3 className='text-center'>Cart</h3>
            <h4 className='text-center'> List</h4>
            <div className="container">
                <div className="row">
                    {cartData && cartData.map((item, index) => {
                        return <>
                            <div className="card col-3 p-2 border-dark" key={index}>
                                <p>ID : {item.id}</p>
                                <h4>{item.name}</h4>
                                <strong>{item.price}</strong>
                                <button className='btn btn-info btn-sm' onClick={() => remove(item.id)}>Remove</button>
                            </div>
                        </>
                    })}
                </div>
                <Link className='btn btn-primary btn-sm mt-3' to="/">Hom</Link >
            </div>


        </>
    )
}
