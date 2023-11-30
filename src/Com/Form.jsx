import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



export default function Form() {
    const inputData = useSelector((state) => state);
    const dispatch = useDispatch();
    // console.log(inputData);

    const handleChange = (e) => {
        dispatch({
            type: 'handleChange',
            input: e,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const existingData = JSON.parse(localStorage.getItem("stData")) || [];
        // const updateData = [...existingData, inputData];
        // localStorage.setItem("stData", JSON.stringify(updateData));
        dispatch({
            type: 'handleSubmit',
            form: inputData,
        })
    }

    return (
        <>
            <div className="container col-6 border rounded border-dark py-3 mt-4 bg-warning-subtle">
                <h4 className='text-center'>Enter Your Details</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='name'
                        className='form-control border border-dark'
                        placeholder='Enter Full Name'

                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name='email'
                        className='form-control border border-dark my-3'
                        placeholder='Email Address'

                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name='number'
                        className='form-control border border-dark'
                        placeholder='Mobile Number'

                        onChange={handleChange}
                    />
                    <select name="state" id="" className='form-select border border-dark my-3' onChange={handleChange}>
                        <option value="">Select Your State</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Maharastra">Maharastra</option>
                        <option value="Utterpradesh">Utterpradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Andhrapradesh">Andhra Pradesh</option>
                        <option value="Goa">Goa</option>
                    </select>
                    <input type="submit" className='btn btn-success col-12 fw-bold' />
                    <Link to='/' className='btn btn-danger col-12 fw-bold my-2' >Back</Link>
                </form>
            </div>
        </>
    )
}
