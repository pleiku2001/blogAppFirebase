import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
function Posts() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc?.id, ...doc?.data() });
        });
        // console.log(list)
        setTimeout(()=>{

        setData(list);
        setLoading(false);
      },[1000])
      } catch (error) {}
    };

      fetchData();
  }, []);

  console.log(loading);

  return (
    <div className=" font-sans flex-wrap h-full w-full flex justify-center items-start gap-3 p-5">
      {loading ? (
        <>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>
          <div className=" flex border-blue-300 shadow  flex-col w-[280px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
            <div className="w-full h-32 object-cover bg-slate-700 rounded-lg">
            </div>
            <Link to={"/blog/"}>
              <div className="font-bold bg-slate-700 h-2 w-64 rounded"></div>
            </Link>
            <div className="bg-slate-700 h-2 w-32 rounded"></div>
          </div>




        </>
      ) : (
        <>
          {data?.map((e) => {
            return (
              <div className=" flex flex-col w-[280px] h-[200px] gap-2 border-2 rounded-lg border-black ">
                <img
                  src={e?.img}
                  alt="img"
                  className="w-full h-32 object-cover  rounded-lg"
                />
                <Link to={"/blog/" + e?.id}>
                  <div className="font-bold ml-2">
                    {e?.title.length <= 33
                      ? e?.title
                      : e?.title.substring(0, 33)}
                  </div>
                </Link>
                <div className="">#{e?.category}</div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Posts;
