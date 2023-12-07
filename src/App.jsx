
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/contactus';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import Addproducts from './Pages/Addproducts/Addproducts';
import Addreviews from './Pages/Addreviews/addreviews';
import Productdetails from './Pages/Home/Productdetails';
import Updateproduct from './Pages/UpdateProduct/Updateproduct';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      loader:function(){
        return fetch(`http://localhost:3000/add-vehicles`);

      }
      
    },
    {
      path: "/contact-us",
      element: <ContactUs/>
       },
    {
      path: "/manage-product",
      element:<ManageProducts/>,
      loader:function(){
        return fetch(`http://localhost:3000/add-vehicles`);
      }
    },
    {
      path: "/add-product",
    element:<Addproducts/>
    },
    {
      path: "/add-review",
      element:<Addreviews/>
    },
    {
      path: "/product/:id",
      element:<Productdetails></Productdetails>,
      loader: function({params}) {
       
        return fetch(`http://localhost:3000/product/${params.id}`);
      }
      
      

    },
    {
      path: "/update-product/:id",
      element:<Updateproduct></Updateproduct>,
      loader: function({params}) {
       
        return fetch(`http://localhost:3000/product/${params.id}`);
      }
      
      

    },
  ]);
 

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
