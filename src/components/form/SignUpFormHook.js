import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schemaValidations = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(15, "Must be 15 character or less"),
});
const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidations),
    mode: "onChange",
  });
  const watchShowAge = watch("showAge", false);
  const onSubmit = async (values) => {
    if (isValid) {
      console.log("send data to Backend");
      //Then reset from
      reset({
        firstName: "Từ Mai",
        lastName: "Thiện",
        email: "thien@gmail.com",
      });
      console.log(values);
    }
    // return new Promise((resolver) => {
    //   setTimeout(() => {
    //     resolver();
    //     console.log(values);
    //   }, 5000);
    // });
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("firstName", "Từ Mai");
    setValue("lastName", "Thiện");
    setValue("email", "tumaithien@gmail.com");
  };
  return (
    <form
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="firstName">First name</label>
        <input
          className="p-4 rounded-md bg-white border border-gray-200 text-[#999]"
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 15,
          // })} // Xử lý thay thế onChange, onBlur, values...
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
        {/* {errors?.firstName?.type === "max" && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )} */}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="lastName">Last name</label>
        <input
          className="p-4 rounded-md bg-white border border-gray-200 text-[#999]"
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="email">Email address</label>
        <MyInput
          name="email"
          placeholder="Enter your email address"
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          className="p-4 rounded-md bg-white border border-gray-200 text-[#999]"
          type="email"
          id="email"
          placeholder="Enter your email address"
          {...register("email")}
        /> */}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" placeholder="Please enter your age" />
        )}
      </div>
      <div>
        <button
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          type="submit"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-top-2 border-r-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div>
        <button
          className="bg-green-400 p-5 text-white rounded-lg"
          onClick={handleSetDemoData}
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control} //Control this Input
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md bg-white border border-gray-200 text-[#999]"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md bg-white border border-gray-200 text-[#999]"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHook;
