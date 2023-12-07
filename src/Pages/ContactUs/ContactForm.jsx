import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function ContactForm() {
  const navigate =useNavigate();

  function handledata(event) {
    event.preventDefault();
    const Email = event.target.email.value;
    const Subject = event.target.Subject.value;
    const Message = event.target.message.value; // Access image URL from the input field
  

    const vehicle = {
     Email,
     Subject,
     Message, // Include image URL in the vehicle object
      
     
    };

    fetch(`http://localhost:3000/buy-prod`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicle),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        navigate('/');
      }
    });
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Leave Your Message</h2>
      <form className="my-10 flex flex-col gap-y-5">
        <input type="text" placeholder="Email" name="email" className="input w-full input-bordered" />
        <input type="text" placeholder="Subject" name="subject" className="input w-full input-bordered" />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Message"
          name="message"
        ></textarea>
        <div className="flex justify-center my-10">
          <button type="submit" className="btn btn-primary w-64">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
