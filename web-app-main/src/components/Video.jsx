/* eslint-disable react/prop-types */
import FlagIcon from "../assets/flag.svg";
import LikeIcon from "../assets/like.png";
import CartIcon from "../assets/add-to-cart.png";
import RatingIcon from "../assets/rating-icon.png";

export const Video = ({ source, description, author }) => {
  return (
    <section className="w-full h-full relative flex justify-center">
      <video className="h-full" src={source} />
      <ul className="absolute right-8 top-2/3 flex flex-col items-center gap-5">
        <li>
          <img src={FlagIcon} alt="flag" />
        </li>
        <li>
          <img src={RatingIcon} alt="rating" />
        </li>
        <li>
          <img src={LikeIcon} alt="Like" />
        </li>
        <li>
          <img src={CartIcon} alt="Cart" />
        </li>
      </ul>
      <div className="absolute left-8 bottom-28">
        <h3 className="font-light text-lg mb-4">
          @{author || "walid"}{" "}
          <span className="font-semibold text-sm cursor-pointer">. Follow</span>{" "}
        </h3>
        <p className="font-semibold">
          {description || "This is just some mock description"}
        </p>
      </div>
    </section>
  );
};
