import { Live } from "./live";
import { Fashion } from "./fashion";
import { Decor } from "./decor";
import { Electronics } from "./electronics";

export const All = () => {
  return (
    <div className="overflow-y-auto h-[550px]">
      <div>
        <Electronics />
      </div>
      <div>
        <Decor />
      </div>
      <div>
        <Live />
      </div>
      <div>
        <Fashion />
      </div>
    </div>
  );
};
