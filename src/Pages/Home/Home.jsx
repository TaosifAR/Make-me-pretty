import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";
import ContactForm from "../ContactUs/ContactForm";
import Aboutus from "./Aboutus";
import Homebanner from "./Homebanner";
import Ourproducts from "./Ourproducts";

function Home()
{
    return (
        
        <div className="max-w-8xl mx-auto">
            <Navbar ></Navbar>
            <Homebanner></Homebanner>
            <div className="max-w-3xl mx-auto"><Ourproducts></Ourproducts></div>
            <Aboutus></Aboutus>
            <div className="max-w-3xl mx-auto"><ContactForm></ContactForm></div>
            
            
           <div className="max-w-6xl mx-auto"> <Footer></Footer></div>
           
            
           
            </div>
    )
}
export default Home;