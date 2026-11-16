import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Appoinments from "../pages/Appoinments";
import AppoinmentDetails from "../pages/AppoinmentDetails";
import AddAppoinment from "../pages/AddAppoinment";
import EditAppoinment from "../pages/EditAppoinment";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ProtectedRoute from "./ProtectedRoute";
import Favorites from "../pages/Favorites";



function AppRoutes() {
 return (
   <Routes>
     <Route
       path="/"
       element={<Home />}
     />

     <Route
       path="/appoinments"
       element={<Appoinments />}
     />

     <Route
       path="/appoinments/:id"
       element={<AppoinmentDetails />}
     />
     <Route
 path="/add-appoinment"
 element={<ProtectedRoute><AddAppoinment /></ProtectedRoute>}
/>

<Route  
 path="/edit-appoinment/:id"
 element={<ProtectedRoute><EditAppoinment /></ProtectedRoute>}
/>

<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/logout"
  element={<Logout />}
/>

<Route
  path="/favorites"
  element={<Favorites />}
/>

   </Routes>
 );
}

export default AppRoutes;
