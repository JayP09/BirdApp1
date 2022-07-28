import React from "react"
import TwitterLogo from "../assets/twitter.jpg"
import SidebarLink from "./SidebarLink"
import { HomeIcon } from "@heroicons/react/solid";
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
    return (
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
                <img src={TwitterLogo} alt="twitter logo" width={30} height={30}/>
            </div>
            <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
                <SidebarLink text="Home" Icon={HomeIcon} active/>
                <SidebarLink text="Explore" Icon={HashtagIcon} />
                <SidebarLink text="Notifications" Icon={BellIcon} />
                <SidebarLink text="Messages" Icon={InboxIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarLink text="Lists" Icon={ClipboardListIcon} />
                <SidebarLink text="Profile" Icon={UserIcon} />
                <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
            </div>
            <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
                Tweet
            </button>
            <div className="flex items-center mt-auto text-[#d9d9d9] hoverAnimation xl:ml-auto xl:-mr-5">
                <img src="https://cdn.discordapp.com/avatars/669518518777282561/98857e117ff28cde16f1a227c80dd272.webp?size=100" alt="profile pic"
                className="h-10 w-10 rounded-full xl:mr-2.5"
                />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">sorrymybad</h4>
                    <p className="text-[#6e767d]">@sorrymybad</p>
                </div>
                <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10"/>
            </div>
        </div>
    )
}

export default Sidebar