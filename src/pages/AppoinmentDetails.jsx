import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function AppoinmentDetails() {
 const { id } = useParams();

 const [appoinment, setAppoinment] =
   useState(null);

 useEffect(() => {
   getAppoinment();
 }, []);

 async function getAppoinment() {
   try {
     const response = await api.get(
       `/appoinments/${id}`
     );

     setAppoinment(response.data);
   } catch (error) {
     console.log(error);
   }
 }

 if (!appoinment) {
   return <h2>Loading...</h2>;
 }

 return (
   <div className="details">
     <img
       src={appoinment.image}
       alt={appoinment.name}
     />

     <h1>{appoinment.name}</h1>

     <p>{appoinment.description}</p>

     <h3>Country</h3>
     <p>{appoinment.country}</p>

     <h3>Category</h3>
     <p>{appoinment.category}</p>

     <h3>Best Time To Visit</h3>
     <p>{appoinment.bestTimeToVisit}</p>

     <h3>Duration</h3>
     <p>{appoinment.duration}</p>

     {/* <h3>Weather</h3>
     <p>{appoinment.weather}</p> */}

     {/* <h3>Language</h3>
     <p>{appoinment.language}</p> */}

     <h3>Currency</h3>
     <p>{appoinment.currency}</p>

     {/* <h3>Budget</h3>
     <p>₹ {appoinment.price}</p> */}

     <h3>Rating</h3>
     <p>{appoinment.rating}</p>

     {/* <h3>Famous For</h3>
     <p>{appoinment.famousFor}</p> */}

     <h3>Top Attractions</h3>

     {appoinment.attractions &&(
      <ul>
       {appoinment.attractions.map(
         (place, index) => (
           <li key={index}>{place}</li>
         )
       )}
     </ul>
     )}
   </div>
 );
}

export default AppoinmentDetails;
