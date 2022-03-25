import React, { useState} from 'react'
import { Container, InputGroup, FormControl, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Tablehead from './Tablehead'

const Home = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));
  const [filterList, setFilterList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [display, setDisplay] = useState(true);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    let term = e.target.value.trim().toLowerCase();
    const searchList = list;
    const filteredList = searchList.filter(list => list.name.toLowerCase().includes(term) || list.plateNo.includes(term));
    setDisplay(false);
    setFilterList(filteredList)
  }

  return (
    <div className="home p-1">
        <Container fluid>
          <div className="text-blue mt-3">
            <p className="font-14">FLEET</p>
            <h2 className="m-minus">Drivers Overview</h2>
          </div>
        </Container>
        <Container className="my-4">
          <InputGroup className="mb-3">
            <FormControl placeholder="search driver's name, truck number...." className="search-input" aria-label="Recipient's username" value={searchTerm} onChange={handleSearch} />
            <InputGroup.Text className="bg-lilac" id="basic-addon2"><button className="font-14 search-button">Search</button></InputGroup.Text>
          </InputGroup>
        </Container>
        <Container className="my-4">
          <div>
            <Link to="/new"><button className="bg-blue text-gray px-3 py-2 border-0 font-14 font-500">Add New Driver</button></Link>
          </div>
          <div className="table mt-4">
            <Tablehead />
            {
              display? 
              list.length === 0 ? <h4 className="text-purple mt-2">There are no drivers</h4> : 
                list.map(lis => 
                  <Row key={lis.id} className="bg-blue font-14 text-gray font-500 p-1 p-md-3 mt-1 shadow-sm">
                    <div className="col-2 col-md-3 bg-blue">{lis.plateNo}</div>
                    <div className="col-4 col-md-3 bg-blue">{lis.name}</div>
                    <div className="col-2 col-md-3 bg-blue">{lis.capacity}</div>
                    <div className="col-2 col-md-3 bg-blue"><Link to={`/details/${lis.id}`}><button className='px-3 text-gray py-1 font-14 select-btn text-blue rounded'>select</button></Link></div>
                  </Row>
                ) :
                filterList.length === 0 ? <h4 className="text-purple mt-2">No driver with such details</h4> : 
                filterList.map(lis => 
                  <Row key={lis.id} className="bg-blue font-14 text-gray font-500 p-1 p-md-3 mt-1 shadow-sm">
                    <div className="col-2 col-md-3 bg-blue">{lis.plateNo}</div>
                    <div className="col-4 col-md-3 bg-blue">{lis.name}</div>
                    <div className="col-2 col-md-3 bg-blue">{lis.capacity}</div>
                    <div className="col-2 col-md-3 bg-blue"><Link to={`/details/${lis.id}`}><button className='px-3 text-gray py-1 font-14 select-btn text-blue rounded'>select</button></Link></div>
                  </Row>
                ) 
            }
          </div>
        </Container>
    </div>
  )
}

export default Home