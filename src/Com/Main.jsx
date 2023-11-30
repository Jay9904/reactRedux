import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Main() {
    const stData = useSelector((state) => state.data);
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
                        {
                            stData && stData.map((item, index) => {
                                return <tr>
                                    <td key={index}>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.number}</td>
                                    <td>{item.state}</td>
                                    <td className='text-warning'>Edit,update,delete</td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
                <Link to='/form' className='btn btn-success btn-sm my-4 fw-bold' >Add Data</Link>
            </div>
        </>
    )
}
