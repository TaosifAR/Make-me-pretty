import { useLoaderData } from "react-router-dom";
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  my-10">
  {vehicles?.map(vehicle => (
    <div key={vehicle._id} className="card card-compact bg-base-200 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{vehicle.title}</h2>
        <p>{vehicle.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  ))}
</div>

       </div>

    );
}
export default Ourproducts;