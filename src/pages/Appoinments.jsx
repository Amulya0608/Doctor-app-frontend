import { useEffect, useState } from "react";
import api from "../services/api";
import AppoinmentCard from "../components/AppoinmentCard";
import { Link } from "react-router-dom";


function Appoinments() {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
  useState("All");
  const [budget, setBudget] =
  useState("All");
  const [sort, setSort] =
  useState("");



 const [appoinments, setAppoinments] =
   useState([]);

 useEffect(() => {
   getAppoinments();
 }, []);

 async function getAppoinments() {
   try {
     const response = await api.get(
       "/appoinments"
     );

     setAppoinments(response.data);
   } catch (error) {
     console.log(error);
   }
 }

 async function deleteAppoinment(id) {

 await api.delete(
   `/appoinments/${id}`
 );

 setAppoinments(
   appoinments.filter(
     appoinment =>
     appoinment.id !== id
   )
 );
}

const filteredAppoinments =
  appoinments.filter(
    appoinment => {

      const searchMatch =
        appoinment.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const categoryMatch =
        category === "All" ||
        appoinment.category ===
          category;

          const budgetMatch =
  budget === "All" ||
  appoinment.budget === budget;

      return (
        searchMatch &&
        categoryMatch && budgetMatch
      );
    }
  );

  let finalAppoinments =
  [...filteredAppoinments];

if (sort === "high") {

  finalAppoinments.sort(
    (a, b) =>
      b.rating - a.rating
  );

}

if (sort === "low") {

  finalAppoinments.sort(
    (a, b) =>
      a.rating - b.rating
  );

}


 return (
   <>
     <h1>Popular Appoinments</h1>

     <Link to="/add-appoinment">
 Add Appointment
</Link>

<div className="filters">
  <input
  type="text"
  placeholder="Search Appoinment"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
/>

<select
  value={category}
  onChange={(e) =>
    setCategory(e.target.value)
  }
>
  <option>All</option>
  <option>ENT</option>
  <option>Dengue</option>
  <option>Malaria</option>
</select>

<select	
  value={budget}
  onChange={(e) =>
    setBudget(e.target.value)
  }
>
  <option>All</option>
  <option>Low</option>
  <option>Medium</option>
  <option>High</option>
</select>

<select
  value={sort}
  onChange={(e) => 
    setSort(e.target.value)
  }
>
  <option value="">
    Select
  </option>

  <option value="high">
    High To Low
  </option>

  <option value="low">
    Low To High
  </option>
</select>

</div>

     <div className="appoinments">
       {finalAppoinments.map((appoinment) => (
         <AppoinmentCard
           key={appoinment.id}
           onDelete={deleteAppoinment}
           appoinment={appoinment}
         />
       ))}
     </div>
   </>
 );
}

export default Appoinments;
