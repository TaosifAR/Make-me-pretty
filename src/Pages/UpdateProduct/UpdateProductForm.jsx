import { useLoaderData, useNavigate } from "react-router-dom";

function UpdateProductForm()
{
    const product = useLoaderData();
    const navigate = useNavigate();
   
    function handleUpdateProduct(event)
    {
    event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const image = event.target.image.value; // Access image URL from the input field
        const description = event.target.description.value;
        
    
        const Updatedproduct = {
          Name: name,
          Price: price,
          Image: image, // Include image URL in the vehicle object
          Description: description,
         
        };
        console.log(Updatedproduct);
        //Now make a put reques to the server form updating.
        fetch(`http://localhost:3000/update-by-id/${product?._id}`,{
        method:"PUT",
        headers: {
            "Content-type":"application/json"
        },
        body:JSON.stringify(Updatedproduct)
    })
    .then(res=> res.json())
    .then(data => {
        if(data.modifiedCount == 1)
        {
            navigate(`/`)
        }
    }
        
        )

    }
   
    return (
        
        <div className="max-w-3xl mx-auto">
            <form onSubmit={handleUpdateProduct} className="my-10 flex flex-col gap-y-5">
                
        <input
          type="text"
          placeholder="Product Name"
          defaultValue={product?.Name}
          name="name"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Product Price"
          defaultValue={product?.Price}
          name="price"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Product Image URL"
          defaultValue={product?.Image}
          name="image"
          className="input w-full input-bordered"
        />
        <textarea
          className="textarea textarea-bordered w-full"
          name="description"
          defaultValue={product?.Description}
          placeholder="Product Description"
        ></textarea>
        <div className="flex justify-center">
          <input type="submit" className="btn btn-primary" value="Add Product" />
        </div>
      </form>

        </div>

    )
}
export default UpdateProductForm;