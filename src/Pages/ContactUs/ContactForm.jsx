import React from 'react';

function ContactForm() {

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
