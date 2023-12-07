import { useNavigate } from "react-router-dom";

function PostTeamForm()
{
    const navigate =useNavigate();
    function handlePostTeammate(event)
    {
        event.preventDefault();
        const fullName =event.target.fullname.value;
        const Position =event.target.designation.value;
        const Email =event.target.email.value;
        const Image =event.target.photo.value;
        const About =event.target.message.value;
        const teammate ={
            fullName,
            Position,
            Email,
            Image,
            About,
        };
      fetch(`http://localhost:3000/add-teammate`,{
      method:"POST",
      headers:
      {
        "Content-Type":"application/json"

      },
      body: JSON.stringify(teammate),
    })
    .then((res)=>res.json())
    .then((data)=>{
        if(data.insertedId)
        {
            navigate(`/`)

        }
});
}
    return(
        <div className="max-w-3xl mx-auto">
        <div className="text-center mt-10">
           <p className="text-orange-500 font-bold">Add Teammate</p>
           <h2 className="text-2xl font-bold">Fill up the form to be a Team Member</h2>
         </div>
         <form onSubmit={handlePostTeammate} className="my-10 flex flex-col gap-y-5">
           <input
             type="text"
             placeholder="Name"
             name="fullname"
             className="input w-full input-bordered"
           />
           <input
             type="text"
             placeholder="position"
             name="designation"
             className="input w-full input-bordered"
           />
           <input
             type="text"
             placeholder="Email"
             name="email"
             className="input w-full input-bordered"
           />
           <input
             type="text"
             placeholder="Image URL"
             name="photo"
             className="input w-full input-bordered"
           />
           <textarea
             className="textarea textarea-bordered w-full"
             name="message"
             placeholder="About"
           ></textarea>
           <div className="flex justify-center">
             <input type="submit" className="btn btn-primary" value="Add Member" />
           </div>
         </form>
        </div>

    )
}
export default PostTeamForm;