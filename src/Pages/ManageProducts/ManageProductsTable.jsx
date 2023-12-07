import { Link, useLoaderData } from "react-router-dom";
function ManageProductsTable()

{

    const vehicles= useLoaderData();
    console.log(vehicles);

     return(
    <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
       
        <th>Product Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
      </thead>
    
    <tbody>
     
      {
        vehicles?.map(vehicle =>(
          <tr key={(vehicle._id)}>
       
            <td>{vehicle.Name}</td>
            <td>{vehicle.Price}</td>
          
            <td>
            <Link to={`/product/${vehicle?._id}`}><button className="btn btn-success">D</button></Link>
                <button className="btn btn-warning">X</button>
                <button className="btn btn-outline">U</button>
            </td>
    
          </tr>
        ))
      }
    
     

     
    </tbody>
  </table>
</div>
)

    
}
export default ManageProductsTable;