import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Home() {
    const products = [{
        id: 1,
        name: "PRODUCT 1",
        price: 2000,
    }, {
        id: 2,
        name: "PRODUCT 2",
        price: 3000,
    },
    {
        id: 3,
        name: "PRODUCT 3",
        price: 4000,
    },
    {
        id: 4,
        name: "PRODUCT 4",
        price: 1000,
    }];


    const dispatch = useDispatch();

    const addTocart = (item) => {
        return dispatch({
            type: "addtocart",
            payload: item,
        });
    };



    return (
        <>
            <h4 className='text-center'>Home</h4>
            <h5 className='text-center'>Product List</h5>
            <div className="container">
                <div className="row">
                    {
                        products && products.map((item, index) => {
                            return <>
                                <div className="card col-3 p-2 border-dark" key={index}>
                                    <p>ID : {item.id}</p>
                                    <h4>{item.name}</h4>
                                    <strong>{item.price}</strong>
                                    <button className='btn btn-info btn-sm' onClick={() => addTocart(item)}>Add to cart</button>
                                </div>
                            </>
                        })
                    }
                </div>
                <Link className='btn btn-primary btn-sm mt-3' to="/cart">Your Cart</Link >

            </div >

        </>

    )
}
