import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


export default function Main() {
    const stData = useSelector((state) => state.data);
    // console.log(stData);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        return dispatch({
            type: "deleteData",
            payload: index,
        });
    }


    return (
        <>
            <div className="container text-center">
                <table className='table table-dark my-4 text-center'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Number</td>
                            <td>State</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {stData && stData.map((item, index) => {
                            return <tr key={index}>
                                <td >{index}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.state}</td>
                                <td>
                                    {/* <button className='btn btn-sm btn-success me-2'>Edit</button> */}
                                    <Link className='btn btn-sm btn-success me-2' to={`/form/${index}`}>Edit</Link>
                                    <button className='btn btn-sm btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>

                </table>
                <Link to='/form' className='btn btn-success btn-sm my-4 fw-bold' >Add Data</Link>
            </div>
        </>
    )
}
