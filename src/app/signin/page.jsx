"use client";
import { React } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Email is a Required Field")
      .nullable(),
    password: Yup.string().required("Password is a Required Field").nullable(),
  });
  const notifyError = (message) => {
    toast.error(message, { theme: "colored" });
  };

  const handelSubmit = async (values) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      console.log(res);
      if (!res?.error) {
        router.push("/dashboard");
      } else {
        notifyError("invalid email or password");
      }
    } catch (error) {
      notifyError(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        /> */}

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handelSubmit}
        >
          {({ errors }) => (
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <Form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <Field
                      name="email"
                      type="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label className="ml-2 block text-sm font-medium leading-6 text-red-600">
                    {errors.email}
                  </label>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Field
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label className="ml-2 block text-sm font-medium leading-6 text-red-600">
                    {errors.password}
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?
                  <a
                    href="#"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Start a 14 day free trial
                  </a>
                </p>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}
