import { useLoaderData } from "react-router-dom";
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
        <th>Description</th>
        <th>Action</th>
      </tr>
      </thead>
    
    <tbody>
     
      {
        vehicles?.map(vehicle =>(
          <tr key={(vehicle._id)}>
       
            <td>{vehicle.Name}</td>
            <td>{vehicle.Price}</td>
            <td>{vehicle.description}</td>
            <td>
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