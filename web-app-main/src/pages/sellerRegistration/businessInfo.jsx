import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";

import PhoneInput from "react-phone-number-input";

//css
import "react-phone-number-input/style.css";
// import "../pages/styles/businessInfo.css";
import "../styles/businessInfo.css";

//icon
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdAssistantNavigation } from "react-icons/md";
import { GoVerified } from "react-icons/go";

export const BusinessInfo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [number, setNumber] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitForm = async (data) => {
    data.phoneNumber = number;
    alert(JSON.stringify(data, null, 4));
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response.json());
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/bankDetails");
    }
  };

  return (
    <div className="w-screen h-screen bg-[#1D003A] flex justify-center text-white">
      <div className="w-full h-full bg-[#130029] max-w-[600px] flex flex-col gap-6 p-8">
        <Link to="/sellerLocation">
          <IoIosArrowBack className="text-[40px] text-white cursor-pointer" />
        </Link>

        <div className="w-full text-start text-[rgba(206,_206,_255,_1)] mb-4">
          <h2 className="text-3xl font-semibold mb-1">Business Information</h2>
          <p>Fill in the required details about your business</p>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-5"
        >
          <Input
            register={register}
            name={"Legal Business Name"}
            placeholder={"Full Business Name"}
            errors={errors}
            type={"text"}
            Icon={CgProfile}
            required
          />
          <Input
            register={register}
            name={"Business Adress"}
            placeholder={"Must include Number"}
            errors={errors}
            type={"text"}
            Icon={MdAssistantNavigation}
            required
          />
          <Input
            register={register}
            name={"Business Registration ID Number"}
            placeholder={"Enter Reg ID Number"}
            errors={errors}
            type={"text"}
            Icon={GoVerified}
            required
          />
          <div className="business_phone_number">
            <p className="pb-[12px]">Business Phone Number</p>
            <PhoneInput
              required
              international
              placeholder="Enter phone number"
              value={number}
              onChange={setNumber}
              className="number"
            />
          </div>
          <div>
            <div className="pb-[12px]">Payment Method</div>
            <select
              {...register("method")}
              className="form-control bg-[#070010] h-[40px]"
              placeholder="Select method"
              required
            >
              <option value="">Select method</option>
              <option value="cash deposit">cash deposit</option>
            </select>
          </div>
          <div className="grid place-content-center md:place-content-center">
            <div className="flex gap-4 items-center pb-[40px]">
              <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
              <p>
                I agree with the{" "}
                <Link className="text-indigo-500 font-medium" to={"/terms"}>
                  Astren Terms and condition
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="h-[46px] w-[372px] rounded-[5px] bg-gradient-to-b from-[#5454FF] to-[#8585E5] p-[3px]"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
