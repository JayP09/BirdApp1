import React,{useState, useRef} from "react"
import {
    CalendarIcon,
    ChartBarIcon,
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
} from "@heroicons/react/outline";

const Input = () => {
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false);
    const filePickerRef = useRef(null);
    

    const addImageToPost = () => {}

    return (
        <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
            <img src="https://cdn.discordapp.com/avatars/669518518777282561/98857e117ff28cde16f1a227c80dd272.webp?size=100" alt="profile pic" 
            className="h-12 w-12 rounded-full xl:mr-2.5"
            />
            <div className="w-full divide-y divide-gray-700">
                <div className={``}>
                    <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What's happening?"
                    rows="2"
                    className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"/>
                </div>
                {selectedFile && (
                    <div className="relative">
                    <div
                        className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                        onClick={() => setSelectedFile(null)}
                    >
                        <XIcon className="text-white h-5" />
                    </div>
                    <img
                        src={selectedFile}
                        alt=""
                        className="rounded-2xl max-h-80 object-contain"
                    />
                    </div>
                )}
                <div className="flex items-center justify-between pt-2.5">
                    <div className="flex items-center">
                        <div className="icon">
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]" 
                            onClick={() => filePickerRef.current.click()}
                            />
                            <input 
                                type="file" 
                                hidden
                                onChange={addImageToPost} 
                                ref={filePickerRef}
                            />
                        </div>
                        <div className="icon rotate-90">
                            <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
                        </div>
                        <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                            <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
                        </div>
                        <div className="icon">
                            <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                        </div>
                        {showEmojis && {
                            
                        }}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input