import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { async } from "@firebase/util";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  const [news, setNews] = useState([]);

  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc?.id, ...doc?.data() });
        });
        list.length = 5;
        // console.log(list)
        setData(list);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://zing-news.p.rapidapi.com/news/thegioi",
        headers: {
          "X-RapidAPI-Key":
            "366c452886msh6497caab3d2285ap140b12jsnbaeef1bc5d82",
          "X-RapidAPI-Host": "zing-news.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setNews(response.data);
          setLoading(false)
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchData();
  }, []);

  // console.log(news);

  return (
    <div className="flex flex-col font-sans gap-5 w-[80%] justify-center items-center m-auto">
      {/*  */}
      <div className="w-[100%] bg-red-400 relative">
        <img
          src="https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className=" object-bottom bg-repeat-round h-[300px] w-[100%] "
        />
        <div className="absolute top-10 left-10 font-extralight  text-black text-[5rem] ">
          BLOG NEWS
        </div>
      </div>
      {/*  */}

      <div className="flex md:flex-row flex-col justify-center items-start mx-auto flex-wrap px-4 space-x-2  ">
        {data?.map((e) => {
          return (
            <div
              className=" flex flex-col h-70 justify-between mb-2  items-start "
              key={e?.id}
            >
              <div className="w-[230px] h-[200px] ">
                <img
                  alt="img"
                  className=" object-cover h-48 w-96 rounded-lg "
                  src={e?.img}
                />
              </div>
              <Link to={"/blog/" + e.id}>
                <div className="my-2 mx-left w-[200px] hover:font-bold">
                  {e?.title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* id img link source sumary title */}
      <div className="bg-blue-400 w-full">
        <h1 className="text-center text-[30px] font-bold my-2">
          Giải trí - ZingNews
        </h1>
        <Link to={"/zing"}>
          <div className="bg-blue-500">
            <img
              alt=""
              src="https://znews-photo-fbcrawler.zadn.vn/Uploaded/opg_aszyrgs/2022_05_27/facebook_thumb_zing.png"
              className="w-full hover:cursor-pointer"
            />
          </div>
        </Link>
      </div>

      <div className=" w-full">
        <h1 className=" text-center text-[30px] font-bold my-2">Thế giới</h1>

        <div className=" flex md:flex-row flex-col justify-center items-start mx-auto flex-wrap px-4 space-x-2">
          {loading ? (
            <>
            <div className=" flex border-blue-300 shadow  flex-col w-[230px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
              <div className="w-full h-32 object-cover bg-slate-700 rounded-lg"></div>
              <Link to={"/blog/"}>
                <div className="font-bold bg-slate-700 h-2 w-44 rounded"></div>
              </Link>
              <div className="bg-slate-700 h-2 w-32 rounded"></div>
            </div>
            <div className=" flex border-blue-300 shadow  flex-col w-[230px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
              <div className="w-full h-32 object-cover bg-slate-700 rounded-lg"></div>
              <Link to={"/blog/"}>
                <div className="font-bold bg-slate-700 h-2 w-44 rounded"></div>
              </Link>
              <div className="bg-slate-700 h-2 w-32 rounded"></div>
            </div>
            <div className=" flex border-blue-300 shadow  flex-col w-[230px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
              <div className="w-full h-32 object-cover bg-slate-700 rounded-lg"></div>
              <Link to={"/blog/"}>
                <div className="font-bold bg-slate-700 h-2 w-44 rounded"></div>
              </Link>
              <div className="bg-slate-700 h-2 w-32 rounded"></div>
            </div>
            <div className=" flex border-blue-300 shadow  flex-col w-[230px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
              <div className="w-full h-32 object-cover bg-slate-700 rounded-lg"></div>
              <Link to={"/blog/"}>
                <div className="font-bold bg-slate-700 h-2 w-44 rounded"></div>
              </Link>
              <div className="bg-slate-700 h-2 w-32 rounded"></div>
            </div>
            <div className=" flex border-blue-300 shadow  flex-col w-[230px] h-[200px] gap-4 border-2 rounded-lg animate-pulse ">
              <div className="w-full h-32 object-cover bg-slate-700 rounded-lg"></div>
              <Link to={"/blog/"}>
                <div className="font-bold bg-slate-700 h-2 w-44 rounded"></div>
              </Link>
              <div className="bg-slate-700 h-2 w-32 rounded"></div>
            </div>
            </>
          ):(
              <>
              {news?.slice(0, 5)?.map((e) => {
            return (
              <>
                <div
                  className=" flex flex-col h-70 justify-between mb-2  items-start "
                  key={e?.id}
                >
                  <div className="w-[230px] h-[200px] ">
                    <img
                      alt="img"
                      className=" object-cover h-48 w-96 rounded-lg "
                      src={e?.img}
                    />
                  </div>
                  <a href={e?.link}>
                    <div className="my-2 mx-left w-[200px] hover:font-bold">
                      {e?.title}
                    </div>
                  </a>
                </div>
              </>
            );
          })}
              </>
          )}
         



        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
