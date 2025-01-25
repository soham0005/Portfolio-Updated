/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { RightIcon, DownIcon, GithubIcon, FileIcon, ProfileIcon } from './SVG/Icon'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Explore from './Components/Explore/Explore'
import Contact from './Pages/Contact';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleExplorer = () => {
    setIsExplorerOpen(!isExplorerOpen);
  };

  return (
    <>
      <Header />

      <div className="layout">
        {/* Sidebar */}
        <div
          className={`sidebar ${isSidebarOpen ? "open" : "closed"
            } flex flex-col justify-between bg-gray-800`}
        >
          <p className="toggle-button p-2 text-center" onClick={toggleExplorer}>
            <FileIcon />
          </p>

          <p className="toggle-button p-2 text-center">
            <ProfileIcon />
          </p>
        </div>

        {/* Explorer Section (Overlay on Mobile) */}
        {isExplorerOpen && (
          <div className="explorer open">
            <Explore />
          </div>
        )}

        {/* Main Content */}
        <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>

          <Routes>
            <Route path="/" element={<h1>Welcome to the Main Content</h1>} />
            <Route path="/experience" element={<h1>Welcome to the Experience Content</h1>} />
            <Route path="/about" element={<h1>Welcome to the About Content</h1>} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;