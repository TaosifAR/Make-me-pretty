import { Link,useLoaderData } from "react-router-dom";
function Ourproducts()

{
    const vehicles= useLoaderData();
    console.log(vehicles);
    return (
        <div>
        <div className="text-center my-6">
            <p className="font-bold">Products Types</p>
            <h1 className="text-3xl font-semibold">Our <span className="text-orange-500">Products</span> </h1>
        
    
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7  my-10">
  {vehicles?.map(vehicle => (
    <div key={vehicle._id} className="card card-compact bg-base-200 shadow-xl">
      <figure><img 
      src={vehicle?.Image}
     />
      </figure>
      <div className="Face Wash">
        <h2 className="card-title">{vehicle?.Name}</h2>
        <p>{vehicle?.Price}</p>
       
        <div className="card-actions justify-end">
            <Link to={`/product/${vehicle._id}`}><button className="btn btn-primary">VIEW DETAILS</button></Link>
          
        </div>
      </div>
    </div>
  ))}
</div>

       </div>

    );
}
export default Ourproducts;