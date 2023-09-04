/* eslint-disable react/prop-types */
// icons
import SmallLogo from "../assets/small-logo.svg";
import MenuIcon from "../assets/menu.svg";
import FlagIcon from "../assets/flag.svg";
import SearchIcon from "../assets/search.svg";
import RiseArrowIcon from "../assets/rise-arrow.svg";
import { BsPlusLg } from "react-icons/bs";
import { BiBell } from "react-icons/bi";

export const ExploreNav = ({ extended }) => {
  return (
    <nav className="bg-[#170429] rounded-md px-5 py-6">
      <div className="w-full pb-6 flex justify-between text-xl">
        <div className="flex">
          <img src={SmallLogo} alt="small-logo" />
          <h2 className="cursor-pointer text-[#F9DCCB] font-semibold">
            ASTREN EMPOWER
          </h2>
        </div>
        <div className="flex space-x-[25px]">
          <BiBell className="text-2xl text-white" />
          <BsPlusLg className="text-2xl text-white" />
        </div>
      </div>
      {extended && (
        <div className="flex w-full justify-between">
          <img src={MenuIcon} alt="menu" />
          <img src={RiseArrowIcon} alt="rise" />
          <div className="w-[295px] relative">
            <input
              className="w-full h-8 pl-8 rounded-md bg-[#4A377F]"
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
            <img
              className="absolute top-1/2 left-2 -translate-y-1/2"
              src={SearchIcon}
              alt="search"
            />
          </div>
          <img src={FlagIcon} alt="flag" />
        </div>
      )}
    </nav>
  );
};
