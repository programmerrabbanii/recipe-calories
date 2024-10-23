import { useEffect } from "react";
import { useState } from "react";

const RecepiesCard = () => {
    const[recepcies,setRecepies]=useState([])
    useEffect(()=>{
        fetch('../public/calories.json')
        .then(res=>res.json())
        .then(data=>setRecepies(data))

    },[])
    return (
        <div className="w-2/3">
         
           <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
           {
                recepcies.map((resi)=> <div key={resi.id} className="card bg-base-100  shadow-xl">
                <figure  className="p-5">
                  <img className="h-56 w-full   object-cover rounded-2xl overflow-hidden"
                    src={resi.recipe_image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title ">{resi.recipe_name}</h2>
                  <p className="border-b mb-2 pb-4">{resi.short_description}</p>


                  <div>
                    <p className="text-xl font-semibold">ingredients: {resi.ingredients.length}</p>
                    {
                        resi.ingredients.map((ingreadient)=> <ul key={ingreadient.id}><li className="list-disc ml-9 text-gray-600">{ingreadient}</li></ul>)
                    }
                  </div>

                  <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    <p>{resi.preparing_time} minutes</p>
                    </div>

                    <div className="flex items-center gap-2">
                    <i className="fa-solid fa-fire-flame-curved"></i>
                    <p>{resi.calories} calories</p>

                    </div>

                  </div>


                  <div className="card-actions ">
                    <button className="px-8 font-semibold mt-5 py-3 rounded-full bg-[#0BE58A]">Want To Cook</button>
                  </div>
                </div>
              </div>)
               
            }
       

           </div>
            
        </div>
    );
};

export default RecepiesCard;