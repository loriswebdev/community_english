
import { auth } from "@/app/firebase/firebase";
import { useAppSelector } from "@/app/lib/hooks";
import React from "react";

const Profile = () => {
  const user = auth.currentUser
  return (
    <div className="h-[1000px] w-full relative flex flex-col justify-center items-center">
      <div>Username: {user?.displayName}</div>
      <div>Email: {user?.email}</div>
      <div>MemberShip: </div>
    </div>
  );
};

export default Profile;
