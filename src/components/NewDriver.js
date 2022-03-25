import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'

const NewDriver = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [capacity, setCapacity] = useState('')
    const [plateNo, setPlateNo] = useState('')
    const [accNo, setAccNo] = useState('')
    const [manager, setManager] = useState('')
    const [list, setList] = useLocalStorage("list", [])
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const nextId = list.length > 0 ? Math.max(...list.map(l => l.id)) + 1 : 0
        const newList = {id: nextId, name, number, capacity, plateNo, accNo, manager}
        setList([...list, newList]);
        alert("driver created");
        navigate('/')
    }

    const handleCancel = () => {
        navigate(-1)
    }

  return (
    <div>
        <Container fluid>
            <div className="text-blue mt-3">
                <p className="font-14">FLEET</p>
                <h2 className="m-minus">Add New Deriver</h2>
            </div>
        </Container>
        <Container className="my-4">
            <div className="bg-lilac p-3 font-14 text-gray font-500">
                <Link to="/" className='bg-lilac text-blue'>Home</Link> / Add New Driver
            </div>
        </Container>
        <Container>
            <Row>
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8 shadow-sm py-3 px-2 rounded bg-white">
                    <Form onSubmit={handleSubmit}>
                        <Row className="">
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="font-14 text-purple font-500">Driver's Name</Form.Label>
                                    <Form.Control type="text" value={name} ref={inputRef} onChange={e => setName(e.target.value)} placeholder="name" required />
                                </Form.Group>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="font-14 text-purple font-500">Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Phone number" value={number} onChange={e => setNumber(e.target.value)} required />
                                </Form.Group>
                            </div>
                        </Row>
                        <Row className="">
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="font-14 text-purple font-500">Capacity</Form.Label>
                                    <Form.Control type="text" placeholder="capacity" value={capacity} onChange={e => setCapacity(e.target.value)} required />
                                </Form.Group>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="font-14 text-purple font-500">Plate Number</Form.Label>
                                    <Form.Control type="number" placeholder="plate number" value={plateNo} onChange={e => setPlateNo(e.target.value)} required />
                                </Form.Group>
                            </div>
                        </Row>
                        <Row className="">
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="font-14 text-purple font-500">Account Number</Form.Label>
                                    <Form.Control type="number" placeholder="acc no" value={accNo} onChange={e => setAccNo(e.target.value)} required />
                                </Form.Group>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="font-14 text-purple font-500">Manager</Form.Label>
                                    <Form.Control type="email" placeholder="manager's email" value={manager} onChange={e => setManager(e.target.value)} required />
                                </Form.Group>
                            </div>
                        </Row>
                        <div className="buttons mt-2">
                            <div>
                                <button type="submit" className='px-3 py-1 font-14 save-btn text-blue rounded'>save</button>
                            </div>
                            <div className='mt-4'>
                                <button onClick={handleCancel} className='px-3 py-1 font-14 cancel-btn text-danger rounded'>cancel</button>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="col-12 col-md-2"></div>
            </Row>
        </Container>
    </div>
  )
}

export default NewDriver