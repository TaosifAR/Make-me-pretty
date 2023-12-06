import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";
import ContactForm from "./ContactForm";

function ContactUs(){
    return(
    <div className="max-w-8xl mx-auto">
      <div>
      <Navbar></Navbar>
      <div className="max-w-3xl mx-auto"><ContactForm></ContactForm></div>
     
       
     </div>
     <div>  <Footer></Footer></div>
   
      </div>
    )
}
export default ContactUs;