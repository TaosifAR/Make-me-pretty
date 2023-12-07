
import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";
import TeamCarousel from "./TeamCarousel";

function Team() {
  return (
    <div>
      <div className="md:max-w-6xl mx-auto">
      <Navbar></Navbar>
        <div className="text-center mt-10">
          <p className="text-orange-500 font-bold">Meet Our Team</p>
          <h2 className="text-2xl font-bold">Read what our team says.</h2>
        </div>
        
      </div>
     <Footer></Footer>
    </div>
  );
}

export default Team;