import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { query, where, orderBy } from "firebase/firestore";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
function Page() {
  let idPost = useParams();
 

  const [data, setData] = useState([]);
  const [liked, setLiked] = useState([]);
  const [id, setId] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // let list = [];
      try {
        const docRef = doc(db, "posts", idPost?.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // console.log("Document data:", docSnap.data());
          // hasData = docSnap.data() !== [] ? true : false;

          // let a = Object.values(docSnap.data());
          setData(docSnap.data());

          // console.log(a);
        } else {
          // doc.data() will be undefined in this case
          // console.log("No such document!");
        }
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      let listId = [];
      try {
        const q = query(
          collection(db, "posts"),
          where("category", "==", data?.category)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          let x = doc?.data();
          x = { ...x, id: doc?.id };

          list.push(x);
          // console.log( doc?.data());
          // console.log( doc?.id);
          listId.push(doc?.id);
        });
        setLiked(list);
        setId(listId);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [data?.category]);

  // console.log(id);
  // console.log(liked);

  // console.log(data?.time?.slice(0, 16));
  // category content img email time title



  return (
    <div className="flex  w-full h-full px-auto sm:flex-row flex-col py-5 justify-start items-start px-10 font-sans">
      <div className="flex-1 flex basis-3/4  flex-col px-10 gap-5">
        <div className="w-full  h-[40vh] ">
          <img
            alt=""
            src={data?.img}
            className="object-cover w-full h-full border-3 rounded-xl"
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-[50px] h-[50px]">
            <Link to={"/"}>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="object-cover w-full h-full border-3 rounded-full"
              />
            </Link>
          </div>
          <div className="">
            <div className="font-bold">{data?.email}</div>
            <div className="">{data?.time?.slice(0, 16)} </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <div className="font-bold text-2xl">{data?.title}</div>

          <div dangerouslySetInnerHTML={{ __html: data?.content }} />

          {/* <div className="">{data?.content}</div> */}
        </div>
      </div>
      <div className="flex-1 flex basis-1/4  flex-col gap-3">
        <div className="text-2xl font-bold">Other posts you may like</div>
        {liked?.map((e) => {
          return (
            <>
              <div className="flex flex-col gap-3 items-start" key={e?.id}>
                <div className="w-[full] mr-3 ">
                  <img
                    alt=""
                    src={e?.img}
                    className="object-cover w-full h-full border-3 rounded-sm"
                  />
                </div>
                <div className="text-2xl font-bold">{e?.title}</div>
                <Link to={"/blog/" + e?.id}>
                  <button className="border-2 p-4 border-red-500 hover:border-black hover:font-bold"
                
                  id={e?.id}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
