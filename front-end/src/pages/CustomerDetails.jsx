import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import customerService from '../services/customer'

function CustomerDetail()
{

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);
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

        await customerService.create(data)
        loadCustomerDetail();
    }

    
    const loadCustomerDetail = async () => {
        fetch('http://localhost:8000/api/customers')
         .then(function(response){
            return response.json();
          })
         .then(function(myJson) {
            setRecord(myJson);
          });
    }
    useEffect(() => {
        loadCustomerDetail();
    }, []);


    const searchRecords = () => {
        axios.get(`http://localhost:8000/api/customers/${search}`)
        .then(response => {
            setRecord(response.data);
        });
    }

    const deleteRecord = (id) => {
        axios.delete(`http://localhost:8000/api/customers/${id}`)
        .then((result)=>{
            loadCustomerDetail();
        })
        .catch(() => {
            alert('Error : Can not delete ');
        });
    }


    return(
    <section>
    <div class="container">  
    <h4 className="mb-3 text-center mt-4">Customer Management </h4>
      <div class="row mt-3">
       <div class="col-sm-4">
          <div className="box p-3 mb-3 mt-5" style={{border:"1px solid #d0d0d0"}}>
            <form > 
            <h5 className="mb-3 ">Add Customer Records</h5>
                <div className="form-group">
                   <input type="text" className="form-control  mb-4" name="name"   value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
                </div>
                  
                <div className="form-group">
                   <input type="number" className="form-control  mb-4" name="age" value={age} onChange={(e) => setAge(e.target.value)}  placeholder="Enter Age" />
                </div>
     
                <div className="form-group">
                   <input type="text" className="form-control mb-4" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter Email" />
                </div>
               
                <div className="form-group">
                   <input type="number" className="form-control mb-4" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  placeholder="Enter Phone" />
                </div>
 
                <button type="button" onClick={saveData} class="btn btn-primary btn-block mt-4">Submit</button>
             </form>
        </div>
       </div>
      <div className="col-sm-8">
        <h5 className="text-center  ml-4 mt-4  mb-5">Customer Records View</h5>
        <div className="input-group mb-4 mt-3">
          <div className="form-outline">
           <input type="text" id="form1" onChange={(e)=>setSearch(e.target.value)} class="form-control" placeholder="Search Employee Here" style={{backgroundColor:"#ececec"}}/>
        </div>
        <button type="button" onClick={searchRecords}  className="btn btn-success">
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        </div>  
        <table className="table table-hover  table-striped table-bordered ml-4 ">
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
     
            {record.map((data)=>
                <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>
                      <a className="text-danger mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete "+ data.name
                          )
                          if (confirmBox === true) {
                            deleteRecord(data._id)
                          }
                        }}> <i className="fa fa-trash" style={{fontSize:"18px",marginRight:"5px"}}></i> </a>
                        
                    <Link className=" mr-2" to={`/EditCustomer/customers/${data._id}`}>
                       <i className="fa fa-edit" aria-hidden="true"></i> 
                    </Link>   
                </td>
                </tr>
                )} 
            </tbody>
        </table>
      </div>
      </div>
    </div>
   </section>
    
                    
    )

}

export default CustomerDetail;