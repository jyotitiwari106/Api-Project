import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const data = useSelector((state) => state.profile.value);

  console.log(data);

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
      <p>{data?.gender}</p>
    </div>
  );
};

export default Profile;
