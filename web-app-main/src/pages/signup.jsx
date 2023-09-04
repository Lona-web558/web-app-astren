import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

// icons
import { AiOutlineMail, AiOutlineLock, AiOutlinePhone } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import {auth} from '../firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isEmail, setIsEmail] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const submitForm = (data) => {
    return data;
  };

  return (
    <div className="w-screen h-screen bg-[#1D003A] flex justify-center text-white">
      <div className="w-full h-full bg-[#130029] max-w-[600px] flex flex-col gap-6 p-8">
        <Link to={"/rise"}>
          <IoIosArrowBack className="text-4xl" />
        </Link>
        <div className="w-full text-center text-[rgba(206,_206,_255,_1)] mb-4">
          <h2 className="text-3xl font-semibold mb-1">
            Welcome to AstrenEmpower
          </h2>
          <p>Join us and explore the world of Astren!</p>
        </div>

        <div className="w-full flex">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsEmail(true);
            }}
            className={`py-3 flex-1 font-medium rounded-l-md ${
              isEmail
                ? "bg-[rgba(133,_133,_229,_0.72)] rounded-r-md"
                : "bg-[rgba(43,_14,_72,_0.93)]"
            }`}
          >
            Email
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsEmail(false);
            }}
            className={`py-3 rounded-r-md flex-1 font-medium ${
              !isEmail
                ? "bg-[rgba(133,_133,_229,_0.72)] rounded-l-md"
                : "bg-[rgba(43,_14,_72,_0.93)]"
            }`}
          >
            Phone
          </button>
        </div>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-5"
        >
          <Input
            register={register}
            name={isEmail ? "email" : "phone"}
            placeholder={isEmail ? "example@gmail.com" : "+1 (415) 555‑0132"}
            type={isEmail ? "email" : "phone"}
            errors={errors}
            Icon={isEmail ? AiOutlineMail : AiOutlinePhone}
            errorMessage={
              isEmail ? "Input valid email" : "Invalid phone number"
            }
          />

          <Input
            register={register}
            name={"full_name"}
            placeholder={"Must consist of two names"}
            type={"text"}
            errors={errors}
            Icon={CgProfile}
            errorMessage={"Must include two names"}
          />

          <Input
            register={register}
            name={"password"}
            placeholder={"At least 8 characters"}
            type={"password"}
            errors={errors}
            Icon={AiOutlineLock}
            errorMessage={
              "At leats 8 characters, 1 upper case, 1 number and 1 symbol"
            }
          />

          <Input
            register={register}
            name={"confirm_password"}
            placeholder={"Must match with password"}
            type={"password"}
            errors={errors}
            Icon={AiOutlineLock}
            errorMessage={"Must match with password above"}
          />
          <div className="flex gap-4 items-center">
            <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
            <p>
              I agree with the{" "}
              <Link className="text-indigo-500 font-medium" to={"/terms"}>
                Astren Terms and condition
              </Link>
            </p>
          </div>

          <button
            disabled={!isChecked}
            type="submit"
            className={`${
              isChecked
                ? "bg-[rgba(75,75,153,0.72)]"
                : "bg-[rgba(133,_133,_229,_0.72)]"
            } py-3 rounded-md font-medium mt-5`}
          >
            Sign Up
          </button>
          <p className="text-center text-lg">
            Already have an account ?{" "}
            <Link className="text-indigo-400 underline" to={"/login"}>
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
