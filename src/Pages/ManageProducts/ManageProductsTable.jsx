import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
function ManageProductsTable()

{

    const data = useLoaderData();
    const [vehicles, setProducts] = useState(data);
  function handleDeleteProduct(vehicleId)
  {
    fetch(`http://localhost:3000/delete-by-id/${vehicleId}`,{
    method:"DELETE"
  })
  .then((res) => res.json())
  .then((data) =>{ 
  if(data.deletedCount>0)
  {
    const otherProduct = vehicles?.filter(vehicle => vehicle._id != vehicleId)
setProducts(otherProduct)

  }
  
  }
  );
    

  }

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
                <button className="btn btn-warning"
                onClick={()=>handleDeleteProduct(vehicle._id)}>X</button>
                <Link to={`/update-product/${vehicle?._id}`}><button className="btn btn-outline">U</button></Link>
                
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