"use client";
import { React } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SkilForm(props) {
  const { data: skilData } = props;
  console.log(skilData);
  const session = useSession();
  const route = useRouter();
  const path = useParams();

  const apiUrl = {
    setNew: "/dashboard/skils/newSkils/api",
    setUpdate: `/dashboard/skils/${path.id}/api`,
  };

  const validationSchema = Yup.object().shape({
    skilType: Yup.string().required("Skil Type is Requred"),
    skil: Yup.string().required("Skil is Requred"),
    onDelete: Yup.boolean(),
  });
  const notifySuccess = (message) => {
    toast.success(message, { theme: "colored" });
  };
  const notifyError = (message) => {
    toast.error(message, { theme: "colored" });
  };

  const handelSubmit = (values) => {
    values.InfoId = session.data.id;
    postdata(values);
  };
  const handleErrors = async (resp) => {
    notifyError(resp.statusText);
    throw new Error(resp.statusText);
  };
  const postdata = async (data) => {
    const res = await fetch(skilData ? apiUrl.setUpdate : apiUrl.setNew, {
      method: "POST",
      body: JSON.stringify({ data }),
    });

    const errorCode = res.ok ? false : res.status;
    console.log(res);
    if (errorCode) handleErrors(res);
    else {
      notifySuccess("Data Successfully Added");
      setTimeout(() => {
        route.refresh();
        route.replace("/dashboard/skils/");
      }, 4000);
    }
  };
  return (
    <div>
      <ToastContainer limit={2} />
      <Formik
        validationSchema={validationSchema}
        initialValues={
          !skilData
            ? validationSchema.cast({
                skilType: "",
                skil: "",
                onDelete: false,
              })
            : {
                skilType: skilData.skilsData.skilType,
                skil: skilData.skilsData.skil,
                onDelete: skilData.skilsData.onDelete,
              }
        }
        onSubmit={handelSubmit}
      >
        {({ errors }) => (
          <Form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Skils Information
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="skilType"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Skil Type
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="skilType"
                        id="skilType"
                        component="select"
                      >
                        <option value="Database">Database</option>
                        <option value="Programming">Programming</option>
                      </Field>
                    </div>
                    <label
                      htmlFor="skilType"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.skilType}
                    </label>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="skil"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Skil
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="skil"
                        id="skil"
                      />
                    </div>
                    <label
                      htmlFor="skil"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.skil}
                    </label>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <fieldset>
                      <legend className="text-base font-semibold leading-6 text-gray-900">
                        on Delete
                      </legend>
                      <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                        <div className="relative flex items-start py-4">
                          <div className="min-w-0 flex-1 text-sm leading-6">
                            <label className="select-none font-medium text-gray-900">
                              Deleted ?
                            </label>
                          </div>
                          <div className="ml-3 flex h-6 items-center">
                            <Field
                              name="onDelete"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <label
                      htmlFor="onDelete"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.onDelete}
                    </label>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
