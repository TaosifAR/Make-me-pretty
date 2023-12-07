import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import Ourproducts from "./Home/Ourproducts";
import Productdetails from "./Home/Productdetails";

function Buyproduct()
{
    return(
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto"><Ourproducts></Ourproducts></div>
            
           <Footer></Footer>
        </div>
    )

}
export default Buyproduct;