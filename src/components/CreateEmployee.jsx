import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CreateEmployee extends Component{
  constructor(props) {
    super(props);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      age: '',
      position: '',
      id: '',
    }
  }

    onChangeFirstname(e) {
      this.setState({
        first_name : e.target.value
      });
    }
    onChangeLastname(e) {
      this.setState({
        last_name : e.target.value
      });
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
    onChangeAge(e) {
        this.setState({
          age: e.target.value
        });
    }
    onChangePosition(e){
      this.setState({
        position: e.target.value
      });
    }
    onChangeId(e){
      this.setState({
        id: e.target.value
      });
    }

    onSubmit(e){
      e.preventDefault();

      const employee = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        age: this.state.age,
        position: this.state.position,
        id: this.state.id,      
      };

      console.log(employee);

      axios.post('http://localhost:5000/employee/add', employee)
      .then(res => console.log(res.data))
      .catch(e => console.log(e));
      
      window.location = '/';
    }


    render(){
      return (
        <form onSubmit={this.onSubmit} className='flex flex-col top-10 relative border p-12 rounded  container mx-auto max-w-3xl'>
     <h1 className='text-center text-cyan-900 py-3 font-semibold text-lg border-b-2 '>
     <Link to='/list' >
              Show Employee List
            </Link>
      </h1> 
    <h1 className='text-4xl py-3 font-semibold text-center'>Add Employee</h1>
    <label className="text-lg py-2" htmlFor="firstName">First Name</label>
    <input className='border h-9 rounded '
        id="firstName"
        type="text"    
        placeholder=" Employee First name"
        name="firstName"
        value={this.state.first_name} 
        onChange={this.onChangeFirstname}
    />
    <label className="text-lg py-2" htmlFor="lastName">Last Name</label>
    <input className='border h-9 rounded '
        id="lastName"
        placeholder=' Employee Last name'
        type="text"
        name="lastName"
       value={this.state.last_name}
        onChange={this.onChangeLastname}
    />
    <label className="text-lg py-2" htmlFor="email">Email</label>
    <input className='border h-9 rounded '
        id="email"
        placeholder=' Email'
        type="email"
        name="email"
        value={this.state.email}
        onChange={this.onChangeEmail}
    />
    <label className="text-lg py-2" htmlFor="salary">Age </label>
    <input className='border h-9 rounded '
        id="age"
        type="number"
        placeholder=' Age'
        name="age"
        value={this.state.age}
        onChange={this.onChangeAge}
    />
    <label className="text-lg py-2" htmlFor="position">Position</label>
    <input className='border h-9 rounded '
        id=" position"
        type="text"
        placeholder=' Company position'
        name="position"
        value={this.state.position}
        onChange={this.onChangePosition}
    />
       <label className="text-lg py-2" htmlFor="salary">ID </label>
    <input className='border h-9 rounded '
        id="id"
        type="number"
        placeholder=' ID'
        name="id"
        value={this.state.id}
        onChange={this.onChangeId}
    />
    <div className='mt-8 justify-center flex '>
        <input type="submit" value="Add Employee"  className='border py-3  px-4 text-lg text-white bg-[#322364] rounded-md cursor-pointer '/>
        <input className='border py-3 text-white px-4 text-lg bg-[#322364] rounded-md cursor-pointer '
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel"
            onClick={() => (false)}
        />
    </div>
</form>
      )
    }
}
