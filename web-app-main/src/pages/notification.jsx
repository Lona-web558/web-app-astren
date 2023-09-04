import { Link } from "react-router-dom";

//icon
import BellOff from "../assets/bell-off.svg";
import { IoIosArrowBack } from "react-icons/io";

export const Notification = () => {
  return (
    <main className="w-screen h-screen bg-[#1D003A] flex text-white">
      <div className="flex flex-col items-center flex-grow ">
        <div className="w-full md:w-[450px] h-screen  md:m-5 rounded-md  bg-[#00000080] relative">
          <nav className="bg-[#170429] rounded-md px-5 py-6">
            <div className="w-full pb-6 flex justify-between text-xl">
              <div className="flex">
                <Link to="/profile">
                  <IoIosArrowBack className="text-[28px] text-white cursor-pointer" />
                </Link>
                <h2 className="font-semibold pr-[5px]">Notifications</h2>
              </div>
            </div>
          </nav>
          <div className="grid place-content-center md:place-content-center">
            <img src={BellOff} className="pt-[135px] pb-[24px] px-[124px]" />
            <div className="p-[35px] flex pb-[32px]">
              To access your notification you have to Sign In
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
