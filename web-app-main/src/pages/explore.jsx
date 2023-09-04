import { useState } from "react";
import { ExploreNav } from "../components/ExploreNav";
import { Sidebar } from "../components/Sidebar";
import { MobileSidebar } from "../components/MobileSidebar";

import { All } from "./all";
import { Live } from "./live";
import { Fashion } from "./fashion";
import { Decor } from "./decor";
import { Electronics } from "./electronics";

import "./styles/exploreSection.css";

export const Explore = () => {
  const [selectedSection, setSelectedSection] = useState("all");

  const getSectionPostion = (selectedSection) => {
    switch (selectedSection) {
      case "live":
        return "23%";
      case "fashion":
        return "41%";
      case "decor":
        return "60%";
      case "electronics":
        return "82%";
      default:
        return;
    }
  };

  const selectSection = (section) => {
    setSelectedSection(section);
  };

  const getSelectedPage = (selectedSection) => {
    switch (selectedSection) {
      case "live":
        return <Live />;
      case "fashion":
        return <Fashion />;
      case "decor":
        return <Decor />;
      case "electronics":
        return <Electronics />;
      default:
        return <All />;
    }
  };

  return (
    <main className="w-screen h-screen bg-[#1D003A] flex text-white">
      <Sidebar page={"explore"} />
      <div className="flex flex-col items-center flex-grow ">
        <div className="w-full md:w-[450px] h-screen  md:m-5 rounded-md  bg-[#00000080] relative">
          <ExploreNav extended />
          <div className="p-5 flex place-content-around">
            <div
              className="cursor-pointer"
              onClick={() => selectSection("all")}
            >
              All
            </div>
            <div
              className="cursor-pointer"
              onClick={() => selectSection("live")}
            >
              Live
            </div>
            <div
              className="cursor-pointer"
              onClick={() => selectSection("fashion")}
            >
              Fashion
            </div>
            <div
              className="cursor-pointer"
              onClick={() => selectSection("decor")}
            >
              Decor
            </div>
            <div
              className="cursor-pointer"
              onClick={() => selectSection("electronics")}
            >
              Electronics
            </div>
          </div>
          <div
            className="section"
            style={{ left: getSectionPostion(selectedSection) }}
          ></div>
          <hr className="my-1 h-0.5 border-t-0 bg-gradient-to-r from-[#C03897] to-[#9D9DFF] opacity-100 dark:opacity-50" />
          {getSelectedPage(selectedSection)}
        </div>
        <MobileSidebar page={"explore"} />
      </div>
    </main>
  );
};
