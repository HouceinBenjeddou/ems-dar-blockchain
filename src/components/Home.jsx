import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="flex justify-between flex-col">
        <div className="container h-[700px] mx-auto py-5 border-2 top-4 relative shadow-lg rounded-xl left-10 max-w-7xl ml-12 ">
          <div className="flex justify-end flex-row mx-4">
          <Link to='/list'>
          <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className=" text-xl font-medium inline-block px-10 py-3 bg-[#2a196e] text-slate-300 leading-tight rounded-xl shadow-md hover:bg-[#483c7a] hover:shadow-lg focus:bg-[#483c7a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3e326c] active:shadow-lg transition duration-150 ease-in-out">Affiche Les Employees</button>
          </Link>
          </div>
          <div className="flex cursor-pointer bottom-5 bg relative justify-center mx-6 items-center flex-col text-lg font-semibold gap-20 max-w-[100px] text-center">

            <Link to='/create'>
            <button  className='bg-[#342963] text-white rounded-full border-2 mx-2 relative p-5 left-8 text-lg font-medium inline-block px-9 py-2.5 hover:bg-[#483c7a] hover:shadow-lg focus:bg-[#483c7a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#483c7a] active:shadow-lg transition duration-150 ease-in-out'>Ajout Employee</button>
            </Link>
            <Link to='/list'>
            <button  className='bg-[#342963] text-white rounded-full border-2 mx-2 relative p-5 left-8 text-lg font-medium inline-block px-9 py-2.5 hover:bg-[#483c7a] hover:shadow-lg focus:bg-[#483c7a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#483c7a] active:shadow-lg transition duration-150 ease-in-out '>List Employees</button>
            </Link>
            <Link to='/details'>
            <button className='bg-[#342963] text-white rounded-full border-2 mx-2 relative p-5 left-8 text-lg font-medium inline-block px-9 py-2.5 hover:bg-[#483c7a] hover:shadow-lg focus:bg-[#483c7a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#483c7a] active:shadow-lg transition duration-150 ease-in-out '>Employee details</button>
            </Link>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Home