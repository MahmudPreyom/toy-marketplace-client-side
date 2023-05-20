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
        loader: () => fetch('http://localhost:5000/allCarToys')
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
