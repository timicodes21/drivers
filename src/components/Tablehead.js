import React from 'react'
import { Row } from 'react-bootstrap'

const Tablehead = () => {
  return (
    <div>
        <Row className="bg-lilac font-14 text-gray font-500 p-md-3 shadow-sm">
          <div className="col-3 bg-lilac">TRUCK NUMBER</div>
          <div className="col-3 bg-lilac">DRIVER'S NAME</div>
          <div className="col-3 bg-lilac">CAPACITY</div>
          <div className="col-3 bg-lilac"></div>
        </Row>
    </div>
  )
}

export default Tablehead