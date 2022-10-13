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

function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc?.id, ...doc?.data() });
        });
        list.length = 5
        // console.log(list)
        setData(list);
      } catch (error) {}
    };
    fetchData();
  }, []);
  // console.log(data);

  // img id title

  return (
    <div className="flex flex-col font-sans ">
      <div className="w-[70vh] p-5 h-[40vh] mx-auto  sm:w-[95vh] md:w-[110vh] lg:w-[140vh] lg:h-[70vh] xl:w-[175vh] 2xl:w-[163vh] 2xl:h-[90vh] ">
        <img
          src="https://images.unsplash.com/photo-1532403540890-3078c4024caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="img"
          className="h-full w-full object-fill"
        />
      </div>
      <div className="flex md:flex-row flex-col justify-start items-center mx-auto flex-wrap px-5 space-x-2   ">
        {/*  */}
        {
          data?.map((e) => {
          return (
            <div className=" flex flex-1 flex-col h-64 " key={e?.id}>
              <div className="w-[230px] h-[200px] ">
            
                <img
                  alt="img"
                  className=" object-cover h-48 w-96 "
                  src={e?.img}
                />
              </div>
              <Link to={"/blog/"+e.id}>
                <div className="my-2 mx-left w-[200px] hover:font-bold">
                  {e?.title}
                </div>
              </Link>
            </div>
          );
        })
        }

        {/* <div className=" flex flex-1 flex-col h-64">
          <div className="w-[230px]">
            <img
              alt="img"
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <Link to={"/"}>
            <div className="my-2 mx-left w-[200px] hover:font-bold">
              Những cô dâu mang tính biểu tượng nhất mọi thời đại
            </div>
          </Link>
        </div>

        <div className="h-64 flex flex-1 flex-col">
          <div className="w-[230px]">
            <img
              alt="img"
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            />
          </div>
          <Link to={"/"}>
            <div className="my-2 mx-left w-[200px] hover:font-bold  flex-wrap">
              Được cùng Châu Bùi trò chuyện vào lần thứ tư trở thành GMTB của
              ELLE Vietnam
            </div>
          </Link>
        </div>
        <div className="h-64 flex flex-1 flex-col">
          <div className="w-[230px]">
            <img
              alt="img"
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1458724338480-79bc7a8352e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <Link to={"/"}>
            <div className="my-2 mx-left w-[200px] hover:font-bold">
              Những gương mặt huyền thoại từng tạo nên bản hùng ca Chúa Tể Của
              Những Chiếc Nhẫn
            </div>
          </Link>
        </div>
        <div className="h-64 flex flex-1 flex-col">
          <div className="w-[230px]">
            <img
              alt="img"
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1502921935-be74c0dc50fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <Link to={"/"}>
            <div className="my-2 mx-left w-[200px] hover:font-bold">
              Những mùi hương thuộc về đại dương xanh
            </div>
          </Link>
        </div>
        <div className="h-64 flex flex-1 flex-col">
          <div className="w-[230px]">
            <img
              alt="img"
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <Link to={"/"}>
            <div className="my-2 mx-left w-[200px] hover:font-bold">
              Thói quen uống nước giúp bạn cải thiện giấc ngủ
            </div>
          </Link>
        </div> */}
        {/*  */}
      </div>
      <div className="h-[105vh] 2xl:h-[50vh] mt-3 flex mx-[22vh] flex-col justify-center items-center 2xl:flex-row  ">
        <div className="flex flex-1 flex-col justify-center items-start px-5">
          <div className="text-2xl">
            [GMTB] CHÂU BÙI - ĐÃ BỚT VỘI NHƯNG VẪN HAY LO | ELLE VIETNAM
          </div>
          <div className="mt-2">
            Được cùng Châu Bùi trò chuyện vào lần thứ tư trở thành GMTB của ELLE
            Vietnam, ELLE đã lắng nghe được nhiều chia sẻ thân mật của cô nàng.
            Là một nghệ sĩ không ngừng học hỏi và làm mới chính mình, một trong
            những thay đổi lớn của Châu là mình hiểu được giá trị của sự “chậm
            lại”.
          </div>
        </div>
        <div className="flex-1 flex">
          <Link to={"/"}>
            <div className="xl:w-[500px] md:w-[400px] sm:w-[300px] w-[180px]  ">
              <img
                src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                alt="img"
                className="object-contain rounded-lg skew-y-6 bg-blue-500 shadow-lg shadow-red-500/50 hover:shadow-red-800/80 hover:border-spacing-1"
                w-full
                h-full
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="h-[105vh] 2xl:h-[50vh] mt-3 flex mx-[22vh] flex-col justify-center items-center 2xl:flex-row  ">
        <div className="flex flex-1 flex-col justify-center items-start px-5">
          <div className="text-2xl">
            KHI Y2K THOÁI TRÀO, XU HƯỚNG NÀO SẼ TIẾP TỤC "BÙNG NỔ"?
          </div>
          <div className="mt-2">
            Emo, Bimbocore, Indie Sleaze và Twee là những phong cách thời trang
            được cho sẽ trở lại với đường đua sau hơn hai năm thống trị của trào
            lưu Y2K.
          </div>
        </div>

        <div className="flex-1 flex">
          <div className="xl:w-[500px] md:w-[400px] sm:w-[300px] w-[180px]  ">
            <iframe
              title="video"
              src="https://www.youtube.com/embed/cbDGTgtU0nk"
              className="object-contain rounded-lg  shadow-lg shadow-red-500/50 w-full h-full aspect-video  "
            ></iframe>
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col justify-center items-center h-[60vh]   mt-20">
        <div className="flex flex-1  w-full h-full items-center justify-center ml-10">
          <div className="xl:w-[450px] md:w-[350px] w-[250px] border-8 border-l-red-800 border-b-blue-800 border-r-green-800 border-t-yellow-300 ">
            <img
              alt="img"
              src="https://plus.unsplash.com/premium_photo-1658507034488-eed9faa8ad1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center items-center xl:items-start px-5 w-full h-full ">
          <div className="text-2xl w-[70vh] mt-10 xl:px-0 px-5">
          Botter Pays Tribute to the Ocean With Their ‘Plastic Sea’ S/S 23 Collection
          </div>
          <div className="w-[70vh] my-2 xl:px-0 px-5">
          Fresh off an ANDAM win, Lisi Herrebrugh & Rushemy Botter continue to integrate their core value of combating climate change in their collections. The designers focused on the sea for Botter’s S/S 23 collection and included multiple aquatic references.
          </div>
          <button className="border-2 p-4 mt-4 border-red-500 hover:border-black hover:font-bold">
            <Link to={"/"}>Read More</Link>
          </button>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col justify-center items-center h-[60vh] xl:h-[10vh]   mt-20">
        <div className="flex flex-1  w-full h-full items-center justify-center ml-10">
          <div className="xl:w-[450px] md:w-[350px] w-[250px] border-8 border-l-red-800 border-b-blue-800 border-r-green-800 border-t-yellow-300 ">
            <img
              alt="img"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center items-center xl:items-start px-5 w-full h-full ">
          <div className="text-2xl w-[70vh] mt-10 xl:px-0 px-5">
          Nina Ricci Taps Harris Reed, Ferragamo’s New Look, and More of the News You Missed
          </div>
          <div className="w-[70vh] my-2 xl:px-0 px-5">
          Harris Reed Is The New Creative Director of Nina Ricci
Nina Ricci has tapped Harris Reed, the 26-year-old designer known for his avant-garde and gender-fluid designs, as their next creative director. Reed’s first collection for the Puig-owned fashion and fragrance brand will debut in 2023.
          </div>
          <button className="border-2 p-4 mt-4 border-red-500 hover:border-black hover:font-bold">
            <Link to={"/"}>Read More</Link>
          </button>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col justify-center items-center h-[60vh]   mt-20 mb-20">
        <div className="flex flex-1  w-full h-full items-center justify-center ml-10">
          <div className="xl:w-[450px] md:w-[350px] w-[250px] border-8 border-l-red-800 border-b-blue-800 border-r-green-800 border-t-yellow-300 ">
            <img
              alt="img"
              src="https://plus.unsplash.com/premium_photo-1661255393410-9a1345dc5f48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center xl:items-start px-5 w-full h-full ">
          <div className="text-2xl w-[70vh] mt-10 xl:px-0 px-5">
          See What the Models Are Wearing Off-Duty During LFW S/S 23! Days 1&2
          </div>
          <div className="w-[70vh] my-2 xl:px-0 px-5">
          With the country in mourning, London Fashion Week’s S/S 23 season soldiered on with the globetrotting model set following suit. Melodie Jeng brings you the best street style from days 1 & 2 for Models.com.
          </div>
          <button className="border-2 p-4 mt-4 border-red-500 hover:border-black hover:font-bold">
            <Link to={"/"}>Read More</Link>
          </button>
        </div>
      </div>

      <hr className="my-8 w-full h-1 bg-gray-200 rounded border-0 dark:bg-gray-700 " />
      <Footer />
    </div>
  );
}

export default Home;
