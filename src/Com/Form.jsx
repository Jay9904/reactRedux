import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function Form() {
    const inputData = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({ name: "", email: "", number: "", state: "" });

    const stData = useSelector((state) => state.data);
    const editData = useParams();
  

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const [error, setError] = useState({});
    const formValidation = () => {
        let valid = true;
        const newError = {};
        if (input.name.trim() === "") {
            newError.name = "Name required";
            valid = false;
        }
        if (input.email.trim() === "") {
            newError.email = "Email required";
            valid = false;
        }
        if (input.number.trim() === "") {
            newError.number = "Number required";
            valid = false;
        }
        if (input.number.length < 10) {
            newError.number = "Number must be 10 digit";
            valid = false;
        }
        if (input.state.trim() === "") {
            newError.state = "State Requierd";
            valid = false;
        }
        setError(newError);
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation()) {
            dispatch({
                type: "addData",
                payload: input,
            })
            navigate("/");
        }
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
                        value={input.name}
                        onChange={handleChange}
                    />
                    {error.name && <p className='text-danger m-0'>{error.name}</p>}
                    <input
                        type="email"
                        name='email'
                        className='form-control border border-dark mt-3'
                        placeholder='Email Address'
                        value={input.email}
                        onChange={handleChange}
                    />
                    {error.email && <p className='text-danger m-0'>{error.email}</p>}

                    <input
                        type="number"
                        name='number'
                        className='form-control border border-dark mt-3'
                        placeholder='Mobile Number'
                        value={input.number}
                        onChange={handleChange}
                    />
                    {error.number && <p className='text-danger m-0'>{error.number}</p>}
                    <select name="state" id="" className='form-select border border-dark mt-3' onChange={handleChange} value={input.state}>
                        <option value="">Select Your State</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Maharastra">Maharastra</option>
                        <option value="Utterpradesh">Utterpradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Andhrapradesh">Andhra Pradesh</option>
                        <option value="Goa">Goa</option>
                    </select>
                    {error.state && <p className='text-danger m-0'>{error.state}</p>}

                    <input type="submit" className='btn btn-success col-12 fw-bold mt-3' />
                    <Link to='/' className='btn btn-danger col-12 fw-bold my-2' >Back</Link>
                </form>
            </div>
        </>
    )
}
