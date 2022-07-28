import React,{useState} from "react"
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import UserContext from "./context/UserContext"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Dashboard from "./components/Dashboard"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <UserContext.Provider
      value = {{
        currentUser,
        setCurrentUser
      }}
    >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/dashboard" element={<Dashboard />} exact/>
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
