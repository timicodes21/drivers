import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';

const DriverDetails = () => {
    const { id } = useParams();
    const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));
    const [show, setShow] = useState(false)
    const [display, setDisplay] = useState("bg-white shadow-sm p-2 p-md-5")

    const filteredList = list.filter(lis => lis.id == id);

    const navigate = useNavigate();

    const handleShow = () => {
        setShow(true);
        setDisplay("bg-white shadow-sm p-2 p-md-5 mid-display");
    }

    const handleCancel = () => {
        setShow(false);
        setDisplay("bg-white shadow-sm p-2 p-md-5");
    }

    const handleDelete = () => {
        const filteredList = list.filter(lis => lis.id != id)

        localStorage.setItem('list', JSON.stringify(filteredList));
        alert('Driver deleted from database')
        navigate('/')
        setShow(false);
        setDisplay("bg-white shadow-sm p-2 p-md-5");
    }

  return (
    <div>
        <Container fluid className="details">
            <div className="text-blue mt-3">
                <p className="font-14">FLEET</p>
                <h2 className="m-minus">Driver Details</h2>
            </div>
        </Container>
        <Container className="my-4">
            <div className="bg-lilac p-3 font-14 text-gray font-500">
                <Link to="/" className='bg-lilac text-blue'>Home</Link> <Link to="/new" className='bg-lilac text-blue'>/ New Driver</Link>
            </div>
        </Container>
        {show && <Container onClick={handleCancel}>
            <div className="delete-popup">
                <Row>
                    <div className="col-2 col-md-4"></div>
                    <div className="col-8 col-md-4 rounded shadow-sm bg-white p-2 p-md-5">
                        <div className="p-3 font-14 text-danger font-500">
                            <p className='text-center'>Are you sure you want to delete <span className="font-16 font-500 text-blue">{filteredList[0].name}</span> from the database</p>
                            <div className="mt-3 p-2 p-md-5 text-center">
                                <button onClick={handleDelete} className="bg-white shadow-sm text-danger px-3 py-2 border-0 font-14 font-500">Yes</button>
                                <button onClick={handleCancel} className="bg-white shadow-sm text-blue px-3 py-2 border-0 font-14 font-500">No</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-md-4"></div>
                </Row>
            </div>
        </Container>}
        {display && <Container className={display}>
            <Row>
                <div className="col-12">
                    <p className="font-16 font-500 text-purple">{filteredList[0].name}</p>
                </div>
            </Row>
            <Row>
                <div className="col-12 col-md-6">
                    <p className="font-14 text-purple">Phone Number: <span className="font-14 font-500 text-purple">{filteredList[0].number}</span></p>
                </div>
                <div className="col-12 col-md-6">
                    <p className="font-14 text-purple">Capacity: <span className="font-14 font-500 text-purple">{filteredList[0].capacity}</span></p>
                </div>
            </Row>
            <Row>
                <div className="col-12 col-md-6">
                    <p className="font-14 text-purple">Plate Number: <span className="font-14 font-500 text-purple">{filteredList[0].plateNo}</span></p>
                </div>
                <div className="col-12 col-md-6">
                    <p className="font-14 text-purple">Account Number: <span className="font-14 font-500 text-purple">{filteredList[0].accNo}</span></p>
                </div>
            </Row>
            <Row>
                <div className="col-12 col-md-6">
                    <p className="font-14 text-purple">Manager: <span className="font-14 font-500 text-purple">{filteredList[0].manager}</span></p>
                </div>
            </Row>
            <Row>
                <div className="col-12 col-md-6">
                    <div className='mt-4'>
                        <button onClick={handleShow} className='px-3 py-1 font-14 cancel-btn text-danger rounded'>Delete</button>
                    </div>
                </div>
            </Row>
        </Container>}
    </div>
  )
}

export default DriverDetails