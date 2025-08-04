import React from 'react'
import Homepage from './components/Homepage/Homepage';
import Login from './components/Auth/login';
import Thankyou from './components/Thankyou/Thankyou';
import Stripe from './components/Stripe/stripe';
import DestinationPage from './components/Trip Details/DestinationPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:"/Homepage",
        element:<Homepage/>
      },
      {
        path:"/trip/:id",
        element:<DestinationPage/>
      },
      {
        path:"/thankyou",
        element:<Thankyou/>
      },
    ]
  },
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/stripe/:id",
    element:<Stripe/>,
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;