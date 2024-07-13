import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../components/navbar';
import Footer from '../components/footer';

const Dashboard = () => {
  return (
    <>
    <Header/>
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Student Information </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/kitchen-routine" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-2xl font-bold mb-2">Kitchen Routine</h2>
          <p>Here you will find all the related information about the kitchen menus and routines</p>
        </Link>
        <Link to="/laundry-schedule" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-2xl font-bold mb-2">Laundry Schedule</h2>
          <p>Here you will find all the related information about the laundry taking and returning time and date</p>
        </Link>
        <Link to="/entry-exit-times" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-2xl font-bold mb-2">Entry/Exit Times</h2>
          <p>Here you will find all the related information about the entry and exit time and date of the certain students</p>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
