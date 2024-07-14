import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import KitchenRoutine from './pages/DashboardCompo/kitchenroutine';
import LaundrySchedule from './pages/DashboardCompo/laundryroutine';
import EntryExitTimes from './pages/DashboardCompo/entryexittime';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/about",
    element: <AboutUs/>

  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/home",
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/kitchen-routine",
    element:<KitchenRoutine/>
  },
  {
    path:"/laundry-schedule",
    element:<LaundrySchedule/>
  },
  {
    path:"entry-exit-times",
    element:<EntryExitTimes/>
  }

]);

const App = () => {
  return (
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;

