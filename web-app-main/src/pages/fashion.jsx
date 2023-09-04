// icons
import Filter from "../assets/filter.svg";
import LiveSign from "../assets/live-sign.svg";
import MilionSign from "../assets/milion-sign.svg";
import VrImg from "../assets/png/vr-img.png";

export const Fashion = () => {
  return (
    <main className="overflow-y-auto h-[550px]">
      <div className="flex justify-between my-5">
        <div className="ml-7">Fashion</div>
        <img src={Filter} alt="filter" className="cursor-pointer mr-7" />
      </div>
      <div className="flex text-s">
        <div className="ml-12">Fashion</div>
        <img src={LiveSign} alt="live-sign" className="ml-2" />
        <img
          src={MilionSign}
          alt="milion-sign"
          className="cursor-pointer ml-40"
        />
      </div>
      <div className="mt-3">
        <img src={VrImg} alt="vr0img" className="ml-10" />
      </div>
    </main>
  );
};
