/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const textItems = [
  {
    header: "Explore Your Potential",
    paragraph:
      "Connect with like-minded individuals, and turn your passions into profit.",
  },
  {
    header: "Build The Future",
    paragraph:
      "Discover the limitless possibilities and unlock your entrepreneurial potential",
  },
  {
    header: "Create Anything You Want",
    paragraph:
      "Create engaging and interactive content that your audience will love",
  },
];

export const OnboardingItem = ({ imageSrc, order, setItemOrder, isHidden }) => {
  return (
    <div
      className={`w-[400px] max-w-screen h-screen flex flex-col justify-center items-center text-white text-center gap-16 transition-all ${
        isHidden && "hidden"
      }`}
    >
      <img className="w-[300px]" src={imageSrc} alt="explore" />
      <div>
        <h2 className="text-2xl font-semibold mb-5 capitalize text-[#CECEFF]">
          {textItems[order - 1]?.header}
        </h2>
        <p>{textItems[order - 1]?.paragraph}</p>
      </div>
      <div className="flex gap-3">
        <div
          className={`${
            order === 1 ? "w-10 bg-indigo-600" : "w-2  bg-indigo-200"
          } h-2 rounded-full`}
        ></div>
        <div
          className={`${
            order === 2 ? "w-10 bg-indigo-600" : "w-2  bg-indigo-200"
          } h-2 rounded-full`}
        ></div>
        <div
          className={`${
            order === 3 ? "w-10 bg-indigo-600" : "w-2  bg-indigo-200"
          } h-2 rounded-full`}
        ></div>
      </div>
      {order === 3 ? (
        <div className="flex flex-col w-full gap-2">
          <Link className="w-full py-3 rounded-md bg-[rgba(133,_133,_229,_0.72)] transition-all hover:bg-[rgba(133,133,229,0.4)]">
            Sign Up
          </Link>
          <Link className="w-full py-3 rounded-md border-2 border-[rgba(133,_133,_229,_0.72)] transition-all hover:bg-[rgba(133,133,229,0.22)]">
            Log In
          </Link>
          <Link
            to={"/rise"}
            className="w-full py-3 rounded-md underline transition-all hover:no-underline"
          >
            Continue as Guest
          </Link>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-2">
          <button
            onClick={() => setItemOrder(order + 1)}
            className="w-full py-3 rounded-md bg-[rgba(133,_133,_229,_0.72)] transition-all hover:bg-[rgba(133,133,229,0.4)]"
          >
            Continue
          </button>
          <Link
            to={"/rise"}
            className="w-full py-3 hover:text-[#6a6a85] transition-all"
          >
            Skip
          </Link>
        </div>
      )}
    </div>
  );
};
