import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';


export default function Shop() {
  const dispatch = useDispatch();
  const [data, setData] = useState([
    {
      id: 1,
      itemName: "Nike Shoes",
      price: 999,
      dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, excepturi?"
    },
    {
      id: 2,
      itemName: "Puma Shoes",
      price: 1599,
      dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, excepturi?"
    },
    {
      id: 3,
      itemName: "Adidas Shoes",
      price: 1999,
      dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, excepturi?"
    },
    {
      id: 4,
      itemName: "Jorden Shoes",
      price: 2599,
      dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, excepturi?"
    },
  ])

  const addtoCart = (item) => {
    dispatch({
      type: "ADDTOCART",
      payload: item
    })
    alert("Item in the cart");
  }

  return (
    <>
      <div className="container">
        <Link className='btn btn-outline-danger border-3 fw-bolder rounded-0 my-2' to={'/cart'}>Your Cart</Link>
        <div className="row mt-3 ">
          {data && data.map((item, index) => {
            return <>
              <div className="card col-3 px-4 py-3 border-0 shadow" key={index}>
                <h3>{item.itemName}</h3>
                <p>Price : {item.price} /-</p>
                <p className='fw-semibold'>{item.dis}</p>
                <button className='btn btn-outline-success border-3 fw-bolder' onClick={() => addtoCart(item)}>Add To cart</button>
              </div>
            </>
          })}
        </div>
      </div>
    </>
  )
}
