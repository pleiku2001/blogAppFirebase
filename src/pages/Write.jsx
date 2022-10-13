import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { auth, db, storage } from "../firebase";
import "react-quill/dist/quill.snow.css";
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Write() {
  const [file, setFile] = useState(null);
  const [title, setTile] = useState("");
  const [cate, setCate] = useState("");
  const [value, setValue] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState({ email: currentUser.email });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  // console.log(currentUser.email)
  // image
  useEffect(
    (e) => {
      setData({ ...data, title: title, category: cate, content: value });
    },
    [title, cate, value]
  );
  useEffect(() => {
    const uploadFile = () => {
      const imgName = new Date().getTime() + file.name;
      // console.log(imgName)

      const storageRef = ref(storage, imgName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");

          switch (snapshot.state) {
            case "paused":
              // console.log("Upload is paused");
              break;
            case "running":
              // console.log("Upload is running");
              break;

            default:
          }
        },
        (error) => {
          console.log(error);
          setError(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            setData((e) => ({ ...e, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleClick = (e) => {
    e.preventDefault();
    try {
      // setData({...data,title: title,cate:cate,value:value});
      // console.log(data );
      if (
        data.title !== "" &&
        data.value !== "" &&
        data.img &&
        data.category !== ""
      ) {
        setError(false);
        var start = new Date();
        start.setUTCHours(0, 0, 0, 0);

        var end = new Date();
        end.setUTCHours(23, 59, 59, 999);

        

        const docRef = addDoc(collection(db, "posts"), {
          ...data,
          time: start.toUTCString() + ":" + end.toUTCString(),
        });
        navigate("/");
      } else {
        // console.log('error')
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-3/4 mt-[50px]  h-[150vh] md:h-full mx-auto  flex justify-start items-centers md:flex-row flex-col font-sans ">
      <div className="basis-3/4  w-full ">
        <div className="mx-3  border-2">
          <input
            className="w-full p-1 "
            placeholder="Title..."
            type="text"
            name="title"
            onChange={(e) => {
              setTile(e.target.value);
            }}
          />
        </div>
        <div className="m-3">
          <ReactQuill
            theme="snow"
            className="w-full md:h-[60vh] h-[40vh]"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="basis-1/4  ">
        <div className="p-3 pb-4 border-2 ">
          <div className="font-bold m-2 text-xl">Publish</div>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            className="w-[200px] py-2 "
            alt=""
          />
        </div>
        <div className="border-2 p-2 h-52 text-xl mt-3">
          <div className="font-bold">Category</div>
          <div className="">
            <input
              type="radio"
              name="cate"
              value="music"
              className="m-2"
              id="1"
              onClick={(e) => {
                setCate(e.target.value);
              }}
            />
            <label htmlFor="1">Âm nhạc</label>
            <br />
            <input
              type="radio"
              name="cate"
              value="cinema"
              className="m-2"
              id="2"
              onClick={(e) => {
                setCate(e.target.value);
              }}
            />
            <label htmlFor="2">Điện ảnh</label>
            <br />
            <input
              type="radio"
              name="cate"
              value="fun"
              className="m-2"
              id="3"
              onClick={(e) => {
                setCate(e.target.value);
              }}
            />
            <label htmlFor="3">Vui nhộn</label>
            <br />
            <input
              type="radio"
              name="cate"
              value="daily"
              className="m-2"
              id="4"
              onClick={(e) => {
                setCate(e.target.value);
              }}
            />
            <label htmlFor="4">Đời sống</label>
            <br />
            <input
              type="radio"
              name="cate"
              value="sport"
              className="m-2"
              id="5"
              onClick={(e) => {
                setCate(e.target.value);
              }}
            />
            <label htmlFor="5">Thể thao</label>
            <br />
          </div>
        </div>
        <div className="border-2 my-2 border-black ">
          {/* <input
            type="submit"
            value="Đăng bài"
            className="w-full cursor-pointer font-bold"
            onClick={handleClick}
          /> */}
          <input
            type="submit"
            value="Đăng bài"
            className="w-full cursor-pointer font-bold hover:bg-black hover:text-white "
            onClick={() => setOpen(true)}
          />
          {open ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Đăng bài</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setOpen(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        {error
                          ? "Vui lòng nhập đầy đủ thông tin"
                          : "Bạn có chắc chắn đằng bài"}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          setError(false);
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleClick}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Write;
