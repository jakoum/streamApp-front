// import Stream from "./stream"
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { initiateSocket } from "./fun";
// import {useEffect} from "react";
// import SignIn from "./sign-in";

// import AppNavBAr from "./components/NavBar";

// function App() {
 
//   const navigate = useNavigate();
//   return (
//     <div>
      
//       <AppNavBAr />
//       <button onClick={()=>navigate('/Stream')}>start streaming</button>
//       <Routes>
//         <Route path='/stream' exact element={<Stream/>} />
//         <Route path='/signIn' exact element={<SignIn/>} />
//       </Routes>
 
      
//     </div> 
//   );
// }


// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlayer from "./components/VideoPlayer";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import "./App.css";
<script src="https://player.live-video.net/1.0.0/amazon-ivs-player.min.js"></script>
const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    
      <div className="App wrapper">
        
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        
      </div>
  
  );
};

export default App;
