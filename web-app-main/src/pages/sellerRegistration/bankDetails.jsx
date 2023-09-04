import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";

//icon
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdAssistantNavigation } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { BiSolidBank } from "react-icons/bi";
import { GiBanknote } from "react-icons/gi";

export const BankDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitForm = async (data) => {
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
      navigate("#");
    }
  };

  return (
    <div className="w-screen h-screen bg-[#1D003A] flex justify-center text-white">
      <div className="w-full h-full bg-[#130029] max-w-[600px] flex flex-col gap-6 p-8">
        <Link to="/businessInfo">
          <IoIosArrowBack className="text-[40px] text-white cursor-pointer" />
        </Link>

        <div className="w-full text-start text-[rgba(206,_206,_255,_1)] mb-4">
          <h2 className="text-3xl font-semibold mb-1">Bank Details</h2>
          <p>Fill in the information for your easy payment</p>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-5"
        >
          <Input
            register={register}
            name={"Bank Account Name"}
            placeholder={"Enter Bank Account Name"}
            errors={errors}
            type={"text"}
            Icon={CgProfile}
            required
          />
          <Input
            register={register}
            name={"Bank Account Number"}
            placeholder={"Account Number"}
            errors={errors}
            type={"text"}
            Icon={GiBanknote}
            required
          />
          <Input
            register={register}
            name={"Bank Name"}
            placeholder={"Enter Bank Name"}
            errors={errors}
            type={"text"}
            Icon={BiSolidBank}
            required
          />
          <Input
            register={register}
            name={"Transit/Routing Number"}
            placeholder={"Enter 5-digits Transit Number"}
            errors={errors}
            type={"text"}
            Icon={GoVerified}
            required
          />
          <Input
            register={register}
            name={"Bank Address"}
            placeholder={"Enter your Bank Address"}
            errors={errors}
            type={"text"}
            Icon={MdAssistantNavigation}
            required
          />
          <Input
            register={register}
            name={"Swift Code"}
            placeholder={"Enter Bank Swift Code"}
            errors={errors}
            type={"text"}
            Icon={GoVerified}
            required
          />
          <div className="grid place-content-center md:place-content-center">
            <button
              type="submit"
              className="h-[46px] w-[372px] rounded-[5px] bg-gradient-to-b from-[#5454FF] to-[#8585E5] p-[3px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
