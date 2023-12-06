import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";
import Addproductform from "./Addproductform";

function Addproducts()
{
    return(
        <div>
            <Navbar></Navbar>
            <div className="max-w-3xl mx-auto">
            <Addproductform></Addproductform>
            </div>
          
            <Footer></Footer>
        </div>
        )
}
export default Addproducts;