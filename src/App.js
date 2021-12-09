
import './App.css';
import React from "react";
import ProfilePhoto from "./components/profile/profilePhoto";
import FullName from "./components/profile/fullName";
import Address from "./components/profile/adress";


function App() {
  return (
    <div className="App">
      
    <ProfilePhoto/>
    <FullName/>
    <Address/>
    </div>
  );
}
export default App;
