/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { RightIcon, DownIcon, GithubIcon, FileIcon, ProfileIcon } from './SVG/Icon'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Explore from './Components/Explore/Explore'

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
          className={`sidebar ${
            isSidebarOpen ? "open" : "closed"
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
            <Explore/>
          </div>
        )}

        {/* Main Content */}
        <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <h1>Main Content</h1>
          <p>This is where your main content will go.</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          reiciendis itaque cumque voluptatibus accusantium neque nemo
          explicabo, pariatur rem, numquam quaerat? Ea recusandae maiores
          cumque facilis quod beatae nulla iure?
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;