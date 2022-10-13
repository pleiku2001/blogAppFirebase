import React from "react";
import { Link } from "react-router-dom";

function Warning() {
  return (
    <div className="flex justify-center items-center flex-col h-[90vh] w-full gap-4">
      <h1>Bạn cần đăng nhập để sử dụng chức năng này !!!</h1>
      <Link to={"/login"}>
        <button className="border-2 p-3 font-bold rounded-xl border-black hover:bg-red-500">
          Đăng nhập
        </button>
      </Link>
    </div>
  );
}

export default Warning;
