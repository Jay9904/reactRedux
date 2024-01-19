import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const removeCart = (index) => {
        dispatch({
            type: "REMOVE",
            payload: index
        })
    }

    return (
        <>
            <div className="container">
                <h3>Your Cart Items</h3>
                <table className='table table-primary mt-3'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems && cartItems.map((item, index) => {
                                return <>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.price} /-</td>
                                        <td>1</td>
                                        <td><button className='btn btn-outline-danger btn-sm border-3 fw-bolder' onClick={() => removeCart(index)}>Remove</button></td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
