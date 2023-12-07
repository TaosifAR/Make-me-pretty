import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import Teammates from "./Home/TeamMates";

function Teamexplore()
{
    return (
        <div>
            <Navbar></Navbar>
           
        <div className="max-w-4xl mx-auto" ><Teammates></Teammates></div>
            <Footer></Footer>
        </div>

    )
}
export default Teamexplore;