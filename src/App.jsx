import React from "react"
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="App">
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        {/* Feed */}
        {/* Widgets */}
        {/* Modal */}
      </main>
    </div>
  )
}

export default App
