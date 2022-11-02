import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
function News() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://zing-news.p.rapidapi.com/news",
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
          setData(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="flex flex-col w-[80%] m-auto">
      <div className="text-[40px] font-extralight p-5">News</div>

      <div className=" font-sans flex-wrap h-full w-full flex justify-start items-start gap-3 p-5 ">
        {loading ? (
          <>
            <div className=" flex md:flex-row flex-col border-blue-300 shadow animate-pulse   w-full h-[300px] md:h-[150px] gap-2 border-[1px] rounded-lg  ">
              <div className="md:h-full md:w-[200px] bg-slate-700 w-full h-[150px] object-cover  rounded-lg" />
              <div className="flex flex-col m-2">
                <div className="font-bold ml-2  bg-slate-700 h-4 w-[300px] rounded mb-5"></div>

                <div className="ml-2  bg-slate-700 h-4 w-[200px] rounded"></div>
              </div>
            </div>
            <div className=" flex md:flex-row flex-col border-blue-300 shadow animate-pulse   w-full h-[300px] md:h-[150px] gap-2 border-[1px] rounded-lg  ">
              <div className="md:h-full md:w-[200px] bg-slate-700 w-full h-[150px] object-cover  rounded-lg" />
              <div className="flex flex-col m-2">
                <div className="font-bold ml-2  bg-slate-700 h-4 w-[300px] rounded mb-5"></div>

                <div className="ml-2  bg-slate-700 h-4 w-[200px] rounded"></div>
              </div>
            </div>
            <div className=" flex md:flex-row flex-col border-blue-300 shadow animate-pulse   w-full h-[300px] md:h-[150px] gap-2 border-[1px] rounded-lg  ">
              <div className="md:h-full md:w-[200px] bg-slate-700 w-full h-[150px] object-cover  rounded-lg" />
              <div className="flex flex-col m-2">
                <div className="font-bold ml-2  bg-slate-700 h-4 w-[300px] rounded mb-5"></div>

                <div className="ml-2  bg-slate-700 h-4 w-[200px] rounded"></div>
              </div>
            </div>
            <div className=" flex md:flex-row flex-col border-blue-300 shadow animate-pulse   w-full h-[300px] md:h-[150px] gap-2 border-[1px] rounded-lg  ">
              <div className="md:h-full md:w-[200px] bg-slate-700 w-full h-[150px] object-cover  rounded-lg" />
              <div className="flex flex-col m-2">
                <div className="font-bold ml-2  bg-slate-700 h-4 w-[300px] rounded mb-5"></div>

                <div className="ml-2  bg-slate-700 h-4 w-[200px] rounded"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            {data?.map((e) => {
              return (
                <a
                  href={e?.link}
                  className=" flex md:flex-row flex-col  w-full h-[300px] md:h-[150px] gap-2 border-[1px] rounded-lg  "
                >
                  <img
                    src={e?.img}
                    alt="img"
                    className="md:h-full md:w-[200px] w-full h-[150px] object-cover  rounded-lg"
                  />
                  <div>
                    <div className="font-bold ml-2">{e?.title}</div>

                    <div className="ml-2">{e?.summary}</div>
                  </div>
                </a>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default News;
