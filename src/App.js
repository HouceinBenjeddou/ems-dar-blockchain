import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import ListEmployee from './components/ListEmployee';
import EmployeeDetails from './components/EmployeeDetails';


function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/create' element= {<CreateEmployee />}></Route>
        <Route path='/edit/id' element= {<EditEmployee />}></Route>
        <Route path='/list' element= {<ListEmployee />}></Route>
        <Route path='/details' element= {<EmployeeDetails />}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
