import React from "react";

function Profile({ user }) {
  console.log(user);

  return (
    <>
      <div className="text-center m-[20px] text-[40px] font-bold font-sans">
        Profile
      </div>
      <div className="flex lg:flex-row flex-col m-auto w-[80%] p-3 border-4 " >
        <img
          alt=""
          src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} 
          className="rounded-full lg: w-[50%]"
        />
        <div className="sm:m-[50px] lg::text-[30px] m-[10px] flex flex-col gap-3  sm:text-[20px] text-[10px]">
        {}
          <div className="">Tên: {user?.displayName|| "Anonymous"}</div>
          <div className="">Email: {user?.email}</div>
          <div className="inline-block">Id: {user?.uid}</div>
        </div>
      </div>
    </>
  );
}

export default Profile;
