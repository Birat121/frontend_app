import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import KitchenRoutine from './components/kitchenroutine';
import LaundrySchedule from './components/laundryroutine';
import EntryExitTimes from './components/entryexittime';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/home",
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

