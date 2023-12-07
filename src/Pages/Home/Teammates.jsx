import { useEffect,useState } from "react";
function Teammates()
{
    const [teammates,setTeammates]=useState([])
        useEffect(()=>{
            fetch(`http://localhost:3000/all-teammates`).then(res=>res.json())
            .then(data=>setTeammates(data));


        },[])
    return (
        <div>
           <div className="text-center my-10">
           <p className="text-orange-500 font-bold">Meet Our Team</p>
           <h2 className="text-2xl font-bold">Details of Teammates</h2>
         </div>
         {
            teammates?.map(teammate=>(
                <div className="my-10">
                <div className="card lg:card-side bg-base-100 shadow-xl">
<figure className="md: w-1/2"><img 
      src={teammate?.Image}
     /></figure>
    
  <div className="card-body">
    <h2 className="card-title">{teammate?.Name}</h2>
    <h3>{teammate?.Position}</h3>
    <p>{teammate?.About}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{teammate?.Email}</button>
    </div>
  </div>
</div>
</div>
  



            ))
         }
       
        </div>
         
        
    );
}
export default Teammates;
