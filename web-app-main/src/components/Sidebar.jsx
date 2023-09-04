/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// icons
import ExploreIcon from "../assets/explore.svg";
import CartIcon from "../assets/cart.svg";
import ChatIcon from "../assets/chat.svg";
import ProfileIcon from "../assets/profile.svg";
import RiseIcon from "../assets/rise.svg";
import ExploreIconColored from "../assets/explore-colored.svg";
import CartIconColored from "../assets/cart-colored.svg";
import ChatIconColored from "../assets/chat-colored.svg";
import ProfileIconColored from "../assets/profile-colored.svg";
import RiseIconColored from "../assets/rise-colored.svg";

export const Sidebar = ({ page }) => {
  return (
    <div className=" w-[150px] h-full hidden md:flex flex-col items-center py-10 text-white bg-[#00000080]">
      <ul className="w-full h-full flex flex-col px-1 items-center gap-10">
        <li className="w-full flex items-center justify-center">
          <Link
            className="w-full hover:bg-[#4A377F] py-2 transition-all"
            to={"/explore"}
          >
            {page === "explore" ? (
              <div className="w-full flex justify-center relative">
                <img
                  className="w-[37px]"
                  src={ExploreIconColored}
                  alt="explore"
                />
                <div className="w-[8px] h-[8px] bg-red-600 rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
              </div>
            ) : (
              <div className="w-full flex justify-center relative">
                <img className="w-[37px]" src={ExploreIcon} alt="explore" />
              </div>
            )}
          </Link>
        </li>
        <li className="w-full flex items-center justify-center">
          <Link
            className="w-full hover:bg-[#4A377F] py-2 transition-all"
            to={"/rise"}
          >
            {page === "rise" ? (
              <div className="w-full flex justify-center relative">
                <img className="w-[40px]" src={RiseIconColored} alt="rise" />
                <div className="w-[8px] h-[8px] bg-red-600 rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
              </div>
            ) : (
              <div className="w-full flex justify-center relative">
                <img className="w-[37px]" src={RiseIcon} alt="rise" />
              </div>
            )}
          </Link>
        </li>
        <li className="w-full flex items-center justify-center">
          <Link
            className="w-full hover:bg-[#4A377F] py-2 transition-all"
            to={"/chat"}
          >
            {page === "chat" ? (
              <div className="w-full flex justify-center relative">
                <img className="w-[40px]" src={ChatIconColored} alt="Chat" />
                <div className="w-[8px] h-[8px] bg-red-600 rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
              </div>
            ) : (
              <div className="w-full flex justify-center relative">
                <img className="w-[40px]" src={ChatIcon} alt="chat" />
              </div>
            )}
          </Link>
        </li>
        <li className="w-full flex items-center justify-center">
          <Link
            className="w-full hover:bg-[#4A377F] py-2 transition-all"
            to={"/cart"}
          >
            {page === "cart" ? (
              <div className="w-full flex justify-center relative">
                <img className="w-[40px]" src={CartIconColored} alt="Cart" />
                <div className="w-[8px] h-[8px] bg-red-600 rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
              </div>
            ) : (
              <div className="w-full flex justify-center relative">
                <img className="w-[40px]" src={CartIcon} alt="cart" />
              </div>
            )}
          </Link>
        </li>
        <li className="w-full flex items-center justify-center">
          <Link
            className="w-full  hover:bg-[#4A377F] py-2 transition-all"
            to={"/profile"}
          >
            {page === "profile" ? (
              <div className="w-full flex justify-center relative">
                <img
                  className="w-[40px]"
                  src={ProfileIconColored}
                  alt="Profile"
                />
                <div className="w-[8px] h-[8px] bg-red-600 rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
              </div>
            ) : (
              <div className="w-full flex justify-center relative">
                <img className="w-[40px]" src={ProfileIcon} alt="profile" />
              </div>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};
