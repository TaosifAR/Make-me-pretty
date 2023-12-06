import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
function AddProductForm() {
  const navigate = useNavigate();

  function handlePostVehicle(event) {
    event.preventDefault();
    // Capture form values
    const name = event.target.name.value;
    const price = event.target.Price.value;
    const description = event.target.description.value;
  
    // Create a new object with the form values
    const vehicle = {
    Name:name,
    Price:price,
    description:description
    };
    console.log(vehicle);
  
  fetch(`http://localhost:3000/add-a-vehicle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehicle),
    })
    .then((res) => res.json())
    .then((data) =>{ if(data.acknowledged)
    {
      navigate('/');

    }

    });
      
  }


    return (
      <div>
        <div className="text-center mt-10">
          <p className="text-orange-500 font-bold">Add Product</p>
          <h2 className="text-2xl font-bold">
            Fill up the form to add a new Product
          </h2>
        </div>
        <form
          onSubmit={handlePostVehicle}
          className="my-10 flex flex-col gap-y-5"
        >
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            className="input w-full input-bordered"
          />
           <input
            type="text"
            placeholder="Product Price"
            name="Price"
            className="input w-full input-bordered"
          />
        
          <textarea
            className="textarea textarea-bordered w-full"
            name="description"
            placeholder="Product Description"
          ></textarea>
          <div className="flex justify-center">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
  export default AddProductForm;