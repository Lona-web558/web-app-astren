import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

// mock videos
import Video1 from "../assets/video-1.mp4";
import Video2 from "../assets/video-2.mp4";
import { Video } from "../components/Video";
import { useEffect } from "react";
import { MobileSidebar } from "../components/MobileSidebar";

export const Rise = () => {
  useEffect(() => {
    localStorage.setItem("isOnboarded", "true");
  }, []);

  return (
    <main className="w-screen h-screen overflow-hidden bg-[#1D003A] flex text-white">
      <Sidebar page={"rise"} />
      <div className=" flex flex-col items-center flex-grow ">
        <div className="w-full md:w-[450px] h-screen  md:m-5 rounded-md  bg-[#00000080] relative">
          <Navbar extended />
          <div className="w-full flex flex-col gap-2 h-[720px] md:h-[816px] overflow-y-scroll py-2 no-scrollbar ">
            <Video source={Video2} />
            <Video source={Video1} />
          </div>
          <MobileSidebar page={"rise"} />
        </div>
      </div>
    </main>
  );
};
