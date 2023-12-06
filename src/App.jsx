
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
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
  ]);
 

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
