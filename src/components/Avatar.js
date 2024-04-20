import React from "react";
import AvatarImg from "../assets/avatar/avatar gorilla.png";

const Avatar = () => {
  return (
    <div className="avatarContainer">
      <img src={AvatarImg} alt="Avatar" className="avatar" />
    </div>
  );
};

export default Avatar;
