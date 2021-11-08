import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditCustomer =  () => {

const {_id} = useParams();
let navigate = useHistory();

const [name, setName] = useState('')
const [age, setAge] = useState(0)
const [email, setEmail] = useState('')
const [phoneNumber, setPhoneNumber] = useState(0)


const saveData = async () => {
    const data = {
        name,
        age,
        email,
        phoneNumber
    }

    const URL = `http://localhost:8000/api/customers/${_id}`;

    await axios.put(URL, 
      data, {
        headers: {
        Accept: 'application/json',
                'Content-type': 'application/json'
        }
      }
    )
    navigate.push('/')
}

useEffect( () => {
  getCustomer();
},[])

function getCustomer() {
  fetch(`http://localhost:8000/api/customers/${_id}`).then((result) => {
    result.json().then((resp) => {
      console.warn(resp)
      setName(resp.name)
      setEmail(resp.email)
      setAge(resp.age)
      setPhoneNumber(resp.phoneNumber)
    
    })
  })
}


return (
    <div className="container">
     <div className="row mt-4"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h4 className="text-center mb-4">Edit A Customer</h4>
          <h5 className="text-success">Customer Name : {name} </h5>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              name="name"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Age"
              name="age"
              defaultValue={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Email"
              name="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Phone Number"
              name="phone"
              defaultValue={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          
          <button onClick={saveData} className="btn btn-secondary btn-block">Update Customer</button>
       
       </div>
      </div> 
    </div>
  );
};

export default EditCustomer;