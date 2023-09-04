/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

// icons
import { AiOutlineMail, AiOutlineLock, AiOutlinePhone } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import {auth} from '../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';


export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isEmail, setIsEmail] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [response, setResponse] = useState("");

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

        {response && (
          <p className="bg-[#d4893e] px-3 py-2 rounded-md font-medium">
            {response}
          </p>
        )}

        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-8 flex-1"
        >
          <Input
            register={register}
            name={isEmail ? "email" : "phone_number"}
            placeholder={isEmail ? "Email/Username" : "+1 (415) 555‑0132"}
            type={isEmail ? "email" : "phone"}
            errors={errors}
            Icon={isEmail ? AiOutlineMail : AiOutlinePhone}
            errorMessage={
              isEmail ? "Input valid email/username" : "Invalid phone number"
            }
          />

          <Input
            register={register}
            name={"password"}
            placeholder={"Input Password"}
            type={"password"}
            errors={errors}
            Icon={AiOutlineLock}
            errorMessage={"Password is required"}
          />

          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
              <p>Remember Me</p>
            </div>
            <Link to={"#"}>Forgot Password?</Link>
          </div>

          <div className="w-full justify-center flex flex-col gap-4 flex-1">
            <button
              type="submit"
              className="bg-[rgba(75,75,153,0.72)]  py-3 rounded-md font-medium "
            >
              Log In
            </button>
            <p className="text-center text-lg">
              {"Don't have an account ? "}
              <Link className="text-indigo-400 underline" to={"/signup"}>
                Join Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
