// icons
import Filter from "../assets/filter.svg";
import LiveSign from "../assets/live-sign.svg";
import MilionSign from "../assets/milion-sign.svg";
import VrImg from "../assets/png/vr-img.png";
import ExImg2 from "../assets/png/ex-img2.png";
import ExImg3 from "../assets/png/ex-img3.png";

//css
import "./styles/card.css";

export const Electronics = () => {
  return (
    <main className="parents-card overflow-y-auto h-[550px]">
      <div className="flex justify-between my-5">
        <div className="ml-7">Consumer Electronics</div>
        <img src={Filter} alt="filter" className="cursor-pointer mr-7" />
      </div>
      <div className="flex text-s">
        <div className="ml-12">VR Headsets</div>
        <img src={LiveSign} alt="live-sign" className="ml-2" />
        <img
          src={MilionSign}
          alt="milion-sign"
          className="cursor-pointer ml-40"
        />
      </div>
      <div className="card mt-3">
        <div className="card-image">
          <img src={VrImg} alt="vrimg" className="ml-10" />
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-image">
          <img src={ExImg3} alt="eximg3" className="ml-10" />
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-image">
          <img src={ExImg2} alt="eximg2" className="ml-10" />
        </div>
      </div>
    </main>
  );
};
