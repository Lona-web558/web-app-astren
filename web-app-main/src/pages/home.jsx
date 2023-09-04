// import { Navigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { OnboardingItem } from "../components/OnboardingItem";

// images
import Onboarding1 from "../assets/onboarding-1.png";
import Onboarding2 from "../assets/onboarding-2.png";
import Onboarding3 from "../assets/onboarding-3.png";
import { useRef, useState } from "react";
import {auth} from '../firebaseConfig';

const imagesItems = [Onboarding1, Onboarding2, Onboarding3];

export const Home = () => {
  // const isOnboarded = localStorage.getItem("isOnboarded");
  const [itemOrder, setItemOrder] = useState(0);
  const logoElement = useRef();

  const hideLogo = () => {
    logoElement.current.classList.add("hidden");
  };

  if (!itemOrder) {
    setTimeout(() => {
      hideLogo();
      setItemOrder(1);
    }, 5000);
  }

  // if (isOnboarded) {
  //   return <Navigate to={"/rise"} />;
  // }

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-screen h-screen bg-[#16002E] flex flex-col justify-center items-center transition-all"
        ref={logoElement}
      >
        <div
          id="logo-starting"
          className="bg-starting-screen bg-center bg-cover mb-5 flex items-center justify-center  drop-shadow-2xl"
        >
          <img src={logo} alt="logo" />
        </div>
        <h2 id="logo-text" className="uppercase text-white font-bold text-xl">
          Astren empower
        </h2>
      </div>
      <OnboardingItem
        imageSrc={imagesItems[itemOrder - 1]}
        order={itemOrder}
        setItemOrder={setItemOrder}
        isHidden={!itemOrder}
      />
    </div>
  );
};
