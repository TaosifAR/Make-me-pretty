import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";

function Productdetails()
{
   const details = useLoaderData();
   
    return(
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto my-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={details?.Image}
  alt="Album"
  /></figure>
  <div className="card-body md:w-1/2">
    <h2 className="card-title">{details.Name}</h2>
    <p>{details?.Description}</p>
    <div className="card-actions justify-end">
        
      <button className="btn btn-primary">{details.Price}</button>
    </div>
  </div>
</div>
            </div>
            
         <Footer></Footer>
        </div>

    )
}
export default Productdetails;