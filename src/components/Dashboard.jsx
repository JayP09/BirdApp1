import React,{useState, useContext, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

const Dashboard = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    let navigate = useNavigate();

    useEffect(() => {
        if(!currentUser) {
            navigate("/", { replace: true })
        }
    },[])

    return (
        <div className="">
            <main className="bg-black min-h-screen flex max-w-[1500px]">
                <Sidebar />
                <Feed />
            </main>
        </div>
    )
}

export default Dashboard