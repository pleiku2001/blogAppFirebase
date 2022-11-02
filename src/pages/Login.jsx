import { LockClosedIcon } from "@heroicons/react/20/solid";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../firebase";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
export default function Login() {

  const { currentUser } = useContext(AuthContext);

  const [error,setError] = useState(false)
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleClick = (e)=>{
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
      dispatch({ type: "LOGIN", payload: user });
      setError(false);
      navigate("/");
      console.log("success")
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    });
  }

  // const SignGG = (e)=>{
  //   e.preventDefault()

  // }
  const [user, loading] = useAuthState(auth);
  if(user !== null){

    localStorage.setItem("user", JSON.stringify(user));
    navigate('/')
    window.location.reload(false);
  }


  // console.log(user)

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Đăng nhập
            </h2>
           
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Nhập Email 
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Nhập Email "
                  onChange={(e)=>{setEmail(e.target.value)}}

                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Nhập Password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
             
              <div className="hover:text-red-500 text-red-400 hover:cursor-pointer" onClick={signInWithGoogle}>
                  Đăng nhập với Google
              </div>
              <div className="text-sm">
                <Link
                  to={"/register"}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Đăng kí
                </Link>
              </div>
            </div>
            {error ? ( 
              <div className="text-center text-red-600 font-bold">
              Vui lòng nhập lại
            </div>
            ) : (
              <></>
            )}
            
            <div>
              <button
                onClick={handleClick}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
