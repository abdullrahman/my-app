// certiType;
// certiFrom;
// certiGPA;
// certiUniv;
// certiGrade;
// certiFromDate;
// certiToDate;
// certiTotalHours;
//  imports
//  validation schima
"use client";
import { React, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import Datepicker from "react-tailwindcss-datepicker";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CertifiForm(props) {
  const { data: certiData } = props;
  console.log(certiData);
  const session = useSession();
  const route = useRouter();
  const path = useParams();
  const [value, setValue] = useState({
    startDate: certiData ? certiData.certificateData.certiFromDate : null,
    endDate: certiData ? certiData.certificateData.certiToDate : null,
  });

  const apiUrl = {
    setNew: "/dashboard/certificate/newCertificate/api",
    setUpdate: `/dashboard/certificate/${path.id}/api`,
  };

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const validationSchema = Yup.object().shape({
    certiType: Yup.string().required("Certificate Type is Requred"),
    certiFrom: Yup.string().required("Certificate From is Requred"),
    certiMajor: Yup.string().required("Certificate Major is Requred"),
    certiGPA: Yup.string().nullable(),
    certiUniv: Yup.string().required("Certificate Univercity is Requred"),
    certiGrade: Yup.string().nullable(),
    certiFromDate: Yup.date().nullable(),
    certiToDate: Yup.date().nullable(),
    certiTotalHours: Yup.string().nullable(),
    onDelete: Yup.boolean(),
  });
  const notifySuccess = (message) => {
    toast.success(message, { theme: "colored" });
  };
  const notifyError = (message) => {
    toast.error(message, { theme: "colored" });
  };

  const handelSubmit = (values) => {
    values.certiFromDate = new Date(value.startDate);
    values.certiToDate = new Date(value.endDate);
    values.InfoId = session.data.id;
    postdata(values);
  };
  const handleErrors = async (resp) => {
    notifyError(resp.statusText);
    throw new Error(resp.statusText);
  };
  const postdata = async (data) => {
    const res = await fetch(certiData ? apiUrl.setUpdate : apiUrl.setNew, {
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
        route.replace("/dashboard/certificate/");
      }, 4000);
    }
  };
  return (
    <div>
      <ToastContainer limit={2} />
      <Formik
        validationSchema={validationSchema}
        initialValues={
          !certiData
            ? validationSchema.cast({
                certiType: "",
                certiFrom: "",
                certiMajor: "",
                certiGPA: "",
                certiUniv: "",
                certiGrade: "",
                certiFromDate: value.startDate,
                certiToDate: value.endDate,
                certiTotalHours: "",
                onDelete: false,
              })
            : {
                certiType: certiData.certificateData.certiType,
                certiFrom: certiData.certificateData.certiFrom,
                certiMajor: certiData.certificateData.certiMajor,
                certiGPA: certiData.certificateData.certiGPA,
                certiUniv: certiData.certificateData.certiUniv,
                certiGrade: certiData.certificateData.certiGrade,
                certiFromDate: value.startDate,
                certiToDate: value.endDate,
                certiTotalHours: certiData.certificateData.certiTotalHours,
                onDelete: certiData.certificateData.onDelete,
              }
        }
        onSubmit={handelSubmit}
      >
        {({ errors }) => (
          <Form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Certification Information
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="certiType"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Certification Type
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="certiType"
                        id="certiType"
                        component="select"
                      >
                        <option value="Associate">Associate</option>
                        <option value="Recomendation">Recomendation</option>
                        <option value="Distinguished">Distinguished</option>
                        <option value="OnlinCertificate">
                          Onlin Certificate
                        </option>
                      </Field>
                    </div>
                    <label
                      htmlFor="certiType"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.certiType}
                    </label>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="certiFrom"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Cerificate From
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="certiFrom"
                        id="certiFrom"
                      />
                    </div>
                    <label
                      htmlFor="certiFrom"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.certiFrom}
                    </label>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="certiMajor"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Cerificate Major
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="certiMajor"
                        id="certiMajor"
                      />
                    </div>
                    <label
                      htmlFor="certiMajor"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.certiMajor}
                    </label>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="certiGPA"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Certificate GPA
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-[20%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="certiGPA"
                        id="certiGPA"
                      />
                    </div>
                    <label
                      htmlFor="certiGPA"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.certiGPA}
                    </label>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="certiUniv"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Certificate Univ
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="certiUniv"
                        id="certiUniv"
                      />
                    </div>
                    <label
                      htmlFor="certiUniv"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.certiUniv}
                    </label>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="certiGrade"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Certificate Grade
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="certiGrade"
                        id="certiGrade"
                      />
                    </div>
                    <label
                      htmlFor="certiGrade"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.certiGrade}
                    </label>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="certiFromDate"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Certificate From-To Date
                    </label>
                    <div className="mt-2">
                      <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        showShortcuts={true}
                        primaryColor="blue"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="certiTotalHours"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Certificate Total Hours
                    </label>
                    <div className="mt-2 flex gap-2">
                      <Field
                        className="block w-[15%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="certiTotalHours"
                        id="certiTotalHours"
                      />
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Hours
                      </label>
                    </div>
                    <label
                      htmlFor="certiTotalHours"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.certiTotalHours}
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
