import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Blog from './components/Blog/Blog.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import AddToysForm from './components/AddToysForm/AddToysForm.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import MyToys from './components/MyToys/MyToys.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import UpdateToys from './components/UpdateToys/UpdateToys.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';
import Error from './components/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "addtoysform",
        element: <AddToysForm></AddToysForm>
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch('https://toys-planet-server.vercel.app/allCarToys')
      },
      {
        path: "mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "updatetoys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({params}) => fetch(`https://toys-planet-server.vercel.app/allCarToys/${params.id}`)
       },
       {
        path: "viewdetails/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> ,
        loader: ({params}) => fetch(`https://toys-planet-server.vercel.app/allCarToys/${params.id}`)
       },
       
    ]
  },
  {
    path: "*",
    element: <Error></Error>
   }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
