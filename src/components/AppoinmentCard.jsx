import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

function AppoinmentCard({ appoinment,onDelete }) {
  let dispatch = useDispatch();
 return (
   <div className="card">
     <img
       src={appoinment.image}
       alt={appoinment.name}
     />

     <h3>{appoinment.name}</h3>

     <p>{appoinment.country}</p>

     <p>{appoinment.category}</p>

     <p>⭐ {appoinment.rating}</p>

     <div className="card-actions">
 <Link
   className="view-btn"
   to={`/appoinments/${appoinment.id}`}
 >
   View
 </Link>

 <Link
   className="edit-btn"
   to={`/edit-appoinment/${appoinment.id}`}
 >
   Edit
 </Link>

 <button
   className="delete-btn"
   onClick={() => onDelete(appoinment.id)}
 >
   Delete
 </button>

 <button
   className="favorite-btn"
   onClick={() => dispatch(addFavorite(appoinment))}>
   Favorites
 </button>
</div>


   </div>
 );
}

export default AppoinmentCard;
