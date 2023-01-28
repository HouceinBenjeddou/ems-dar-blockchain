import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaUserTie} from 'react-icons/fa'


const Employee = props => (
  <>
  <div className="flex py-5 justify-center items-center flex-row">
  <div className="flex my-2 flex-col justify-center items-center">
  <div className=" relative h-[250px] shadow-xs max-w-[480px] border rounded-xl flex-col flex justify-center">
  <div className='flex container mx-auto flex-col justify-center text-center items-center relative'>
      <FaUserTie className='text-6xl py-2'/>
      <span className='flex text-slate-800 flex-col gap-1 justify-center'>
          <h1 className='text-2xl font-semibold '>{props.employee.first_name}</h1>
          <h1 className='text-2xl mx-3 font-semibold '>{props.employee.email}</h1>
      </span>
        <p className='text-slate-800 text-xl border bg-blue-100 rounded-xl px-3 py-1'>{props.employee.position}</p>
        <a href="mail" className='text-lg text-blue-500 font-medium my-2'>{props.employee.email}</a>
        <span className='flex text-slate-800 flex-row gap-20 text-xl border-t-2 border-teal-300 w-full justify-center'>
         <p> <span className=' text-gray-500 '>ID</span> {props.employee.id}</p>
         <p><span className=' text-gray-500 '>Age</span> {props.employee.age}</p>
           </span>
      </div>
  </div> 

    <p className='text-2xl font-medium'>
      <Link to={"/edit/"+props.employee._id}>Edit</Link> | <a href="#b" onClick={() => { props.deleteEmployee(props.employee._id) }}>Delete</a>
    </p>

  </div>
  </div>
 
  </>
)

export default class ListEmployee extends Component {
  constructor(props) {
    super(props);

    this.deleteEmployee = this.deleteEmployee.bind(this)

    this.state = {employee: []};
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/employee/')
      .then(response => {
        this.setState({ employee: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  deleteEmployee(id) {
    axios.delete('http://localhost:5000/employee/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      employee: this.state.employee.filter(el => el._id !== id)
    })
  }
  employeeList () {
    return this.state.employee.map(currentEmployee => {
      return <Employee employee={currentEmployee} deleteEmployee={this.deleteEmployee} key={currentEmployee._id}/>;
    })
  }

 

  render() {
    return (
      <div>
        <h3 className='text-3xl font-semibold py-4 text-center border-b-2'>Current Employees</h3>
            { this.employeeList() }
      </div>
    )
  }
}