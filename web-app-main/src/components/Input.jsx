/* eslint-disable react/prop-types */

export const Input = ({
  type,
  placeholder,
  Icon,
  name,
  register,
  errors,
  errorMessage,
}) => {
  return (
    <div className="text-white flex flex-col gap-4">
      <label className="capitalize" htmlFor={name}>
        {name.replace("_", " ")}
      </label>
      <div className="flex flex-col relative">
        <input
          className="outline-none bg-transparent pb-2 mb-2 pl-12 border-b-[1px] border-b-slate-200"
          {...register(name, {
            required: errorMessage,
          })}
          type={type}
          placeholder={placeholder}
          id={name}
        />
        {errors[name] ? (
          <p className="text-sm text-amber-500 ">{errors[name].message}</p>
        ) : (
          ""
        )}
        {Icon && <Icon className="absolute -top-1 left-0 text-3xl" />}
      </div>
    </div>
  );
};
