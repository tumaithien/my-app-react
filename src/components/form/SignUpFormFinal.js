import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 character or less";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 character or less";
//   }

//   return errors;
// };

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        term: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required(),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        term: Yup.boolean().oneOf(
          [true],
          "Please check the term and conditions"
        ),
      })}
      onSubmit={(values, actions) => {
        // console.log(values);
        setTimeout(() => {
          actions.setSubmitting(false);
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            term: false,
          });
        }, 5000);
      }}
    >
      {(formik) => {
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="First name"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
            ></MyInput>
            <MyInput
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>
            <MyInput
              type="email"
              name="email"
              id="email"
              label="Email address"
              placeholder="Enter your email address"
            ></MyInput>
            <MyTextarea
              label="Introduce yourself"
              name="intro"
              placeholder="Enter your introduce"
              className="test"
            ></MyTextarea>
            <MySelectbox name="job" label="Select your job" id="job">
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="pm">PM</option>
              <option value="tester">Tester</option>
            </MySelectbox>
            <MyCheckbox name="term">
              I accept the term and conditions
            </MyCheckbox>
            <div>
              <button
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

// spereat operator
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("field", field, "meta", meta);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className={`p-4 rounded-md bg-white border border-gray-200 text-[#999] focus:ring-purple-300 focus:ring-2`}
        {...field} // Thay thế cho onBlur, value, onChange
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextarea = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className={`p-4 rounded-md bg-white border border-gray-200 text-[#999] h-[150px] resize-none ${className}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelectbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        type="text"
        className={`p-4 rounded-md bg-white border border-gray-200`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
