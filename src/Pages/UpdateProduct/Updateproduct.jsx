import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";
import UpdateProductForm from "./UpdateProductForm";

function Updateproduct()
{
    return (
        <div>
            <div>
                <Navbar></Navbar>

            <div className="text-center my-10">
          <p className="text-orange-500 font-bold">Uodate Product</p>
          <h2 className="text-2xl font-bold">
           You can update any iformation of product here.
          </h2>
          
          </div>
          <UpdateProductForm></UpdateProductForm>
         <Footer></Footer>
                
            </div>
        </div>
    )
}
export default Updateproduct;