import { Link } from "react-router-dom";
function Navbar()
{
    return(

        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        
          
       
      </ul>
    </div>
    <a href="http://localhost:5173/" className="btn btn-ghost text-xl">Make <span className="text-red-300">Me</span> Pretty</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
      <li><Link to={`/contact-us`}>Contact Us</Link></li>
      
      <li><Link to={`/manage-product`}>Manage Product</Link></li>
      <li><Link to={`/add-product`}>Add Product</Link></li>
      <li><Link to={`/add-teammate`}>Add Member</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end">
 
   <Link to={`/team-explorer`} className="btn">Team Explore</Link>
  </div>
</div>
    )
}
export default Navbar;