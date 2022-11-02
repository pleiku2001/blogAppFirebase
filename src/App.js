import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page from "./pages/Page";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Warning from "./pages/Warning";
import Posts from "./pages/Posts";

import News from "./pages/News";
import Profile from "./pages/Profile";


function App() {
  // const {user} = useAuthState()
  const { currentUser } = useContext(AuthContext);

  // console.log(user)

  // console.log(currentUser)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="write" element={currentUser ? <Write /> : <Warning />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="blog/:id" element={<Page   />} />
        <Route path="warning" element={<Warning />} />
        <Route path="posts" element={<Posts />} />
        <Route path="news" element={<News />} />
        <Route path="user" element={currentUser ? <Profile user={currentUser}/> : <Warning />} />
        
        {/* <Route path="post/:id" element={<Post />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
