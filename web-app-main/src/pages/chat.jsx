import { Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { MobileSidebar } from "../components/MobileSidebar";

//icon
import ChatBubbleWarning from "../assets/chat-bubble-warning.svg";

export const Chat = () => {
  return (
    <main className="w-screen h-screen bg-[#1D003A] flex text-white">
      <Sidebar page={"chat"} />
      <div className="flex flex-col items-center flex-grow ">
        <div className="w-full md:w-[450px] h-screen  md:m-5 rounded-md  bg-[#00000080] relative">
          <nav className="bg-[#170429] rounded-md px-5 py-6">
            <div className="w-full pb-6 flex justify-between text-xl">
              <div className="flex">
                <h2 className="cursor-pointer font-semibold">Messages</h2>
              </div>
              <div className="flex space-x-[25px]"></div>
            </div>
          </nav>
          <div className="grid place-content-center md:place-content-center">
            <img
              src={ChatBubbleWarning}
              className="pt-[135px] pb-[24px] px-[124px]"
            />
            <div className="p-[35px] flex pb-[32px]">
              Sign In or Log In to access your messages
            </div>
            <div className="pb-[8px]">
              <Link to={"/signup"}>
                <button
                  type="button"
                  className="h-[46px] w-[372px] rounded-[5px] bg-gradient-to-b from-[#5454FF] to-[#8585E5] p-[3px]"
                >
                  <div className="h-full w-full pt-[7px] bg-[#0E001F] hover:bg-gradient-to-b">
                    Sign Up
                  </div>
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/login"}>
                <button
                  type="button"
                  className="h-[46px] w-[372px] rounded-[5px] bg-gradient-to-b from-[#5454FF] to-[#8585E5] p-[3px]"
                >
                  <div className="h-full w-full pt-[7px] bg-[#0E001F] hover:bg-gradient-to-b">
                    Log In
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <MobileSidebar page={"chat"} />
        </div>
      </div>
    </main>
  );
};
