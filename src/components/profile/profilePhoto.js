import React from "react";
import ProfilePic from "./profilepic.png";
const ProfilePhoto = () => {
    return (
      <div >
        <h2 className="profile">profile photo</h2>
        <img className="images" width='250' src= {ProfilePic} />
      </div>
    );
  };
  export default ProfilePhoto;