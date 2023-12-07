import Aboutus from "./Aboutus";
import { Link } from "react-router-dom";

function Homebanner() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="md:w-1/2 " />
                <div>
                    <h1 className="text-5xl font-semibold">Make <span className="text-red-300">Yourself</span> Pretty!</h1>
                    <p className="py-6">Welcome to Make Me Pretty, your ultimate destination for exquisite makeup products that accentuate your beauty.We understand the essence of every girl's desire to feel confident and glamorous.</p>
                    <Link to={`/buy-product`}><button className="btn btn-outline btn-accent">Let's Buy</button></Link>
                </div>
            </div>
           
        </div>
        
        
    )
}
export default Homebanner;