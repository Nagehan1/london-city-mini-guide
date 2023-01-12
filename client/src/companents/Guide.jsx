import React, {useState, useEffect} from 'react'
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import CityTable from './CityTable.jsx'

function Guide() {
    const [data, setData] = useState([]);
    const [city, setCity] = useState("harrow");
    const [category, setCategory] =useState("doctors");
    const handleCity = (e) => {
        setCity(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

useEffect(() => {
    fetch(`http://localhost:3002/${city}/${category}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json())
        .then(data => {
                setData(data);
            }
        )
        .catch(err => console.log(err))
}, [data]);

  return (
        <div>
            <Form.Select style={{margin:"10px",width:"200px"}} onChange={handleCity}>
                <option value="harrow">Harrow</option>
                <option value="heathrow">Heathrow</option>
                <option value="startford">Startford</option>
            </Form.Select>
            <div>
                <Button variant={"outline-primary"} style={{margin:"10px"}} onClick={handleCategory} value={'doctors'}>Doctors</Button>
                <Button  variant={"outline-danger"} style={{margin:"10px"}} onClick={handleCategory} value={'pharmacies'}>Pharmacies</Button>
                <Button  variant={"outline-info"} style={{margin:"10px"}} onClick={handleCategory} value={'colleges'}>Colleges</Button>
                <Button variant={"outline-dark"} style={{margin:"10px"}} onClick={handleCategory} value={'hospitals'}>Hospitals</Button>
            </div>
            <div>
                <CityTable data={data}/>
            </div>
        </div>
    );
};

export default Guide