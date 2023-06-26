"use client";
import { React, useState } from "react";
import Error from "next/error";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  SuccessfulMessage,
  ErrorMessage,
} from "../../common/notifications/successfull";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

export default async function InfoForm(props) {
  const { data } = props;
  const route = useRouter();
  const path = useParams();
  console.log(data);
  const [status, setStatus] = useState(null);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const apiUrl = {
    setNew: "/dashboard/info/newInfo/api",
    setUpdate: `/dashboard/info/${path.id}/api`,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is a Required Field"),
    email: Yup.string().email().required("Email is a Required Field"),
    password: Yup.string().required("Password is a Required Field"),
    careerObJ: Yup.string().required("Career Objective is a Required Field"),
    summary: Yup.string().required("Summary is a Required Field"),
    city: Yup.string().required("City is a Required Field"),
    role: Yup.string().required("Role is a Required Field"),
    onDelete: Yup.boolean().required("Deleted is a Required Field"),
  });

  const handelSubmit = (values) => {
    console.log(values);
    postdata(values);
  };
  const handleErrors = async (resp) => {
    setShow(true);
    setMessage(resp.statusText);
    setTimeout(() => {
      setShow(false);
    }, 3000);

    throw new Error(resp.statusText);
  };
  const postdata = async (data) => {
    const res = await fetch(data.email ? apiUrl.setUpdate : apiUrl.setNew, {
      method: "POST",
      body: JSON.stringify({ data }),
    });
    setStatus(res.ok ? true : false);
    const errorCode = res.ok ? false : res.status;
    console.log(res);
    if (errorCode) handleErrors(res);
    else {
      setShow(true);
      setMessage("Data Inserted Successsfully");
      setTimeout(() => {
        route.push("/dashboard/info");
        setShow(false);
      }, 3000);
    }
  };
  return (
    <>
      {show && status ? <SuccessfulMessage message={message} /> : <></>}
      {show && !status ? <ErrorMessage message={message} /> : <></>}
      <Formik
        validationSchema={validationSchema}
        initialValues={validationSchema.cast({
          name: data.getUserInfo.name,
          email: data.getUserInfo.email,
          password: data.getUserInfo.password,
          careerObJ: data.getUserInfo.careerObJ,
          summary: data.getUserInfo.summary,
          city: data.getUserInfo.city,
          role: data.getUserInfo.role,
          onDelete: data.getUserInfo.onDelete,
        })}
        onSubmit={handelSubmit}
      >
        {({ errors }) => (
          <Form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="name"
                        id="name"
                      />
                    </div>
                    <label
                      htmlFor="name"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.name}
                    </label>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="email"
                        id="email"
                        type="email"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.email}
                    </label>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="password"
                        id="password"
                        type="password"
                      />
                    </div>
                    <label
                      htmlFor="password"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.password}
                    </label>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="careerObJ"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Career Objective
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="careerObJ"
                        id="careerObJ"
                        component="textarea"
                      />
                    </div>
                    <label
                      htmlFor="careerObJ"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.careerObJ}
                    </label>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="summary"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Summary
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="summary"
                        id="summary"
                        component="textarea"
                      />
                    </div>
                    <label
                      htmlFor="summary"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.summary}
                    </label>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      {/* <Field
                        label="city"
                        name="city"
                        id="city"
                        as={Select}
                        selected={values.city}
                        options={cityOptions}
                        onChange={(val) => setFieldValue("city", val)}
                      /> */}
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="city"
                        id="city"
                        component="select"
                      >
                        <option value="Riyadh">Riyadh</option>
                        <option value="Jeddah">Jeddah</option>
                      </Field>
                    </div>
                    <label
                      htmlFor="city"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.city}
                    </label>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Role
                    </label>
                    <div className="mt-2">
                      <Field
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="role"
                        id="role"
                        component="select"
                      >
                        <option value="ADMIN">ADMIN</option>
                        <option value="USER">USER</option>
                      </Field>
                      {/* <Field
                        label="role"
                        name="role"
                        id="role"
                        as={Select}
                        selected={values.role}
                        options={roleOptions}
                        onChange={(val) => setFieldValue("role", val)}
                      /> */}
                    </div>
                    <label
                      htmlFor="role"
                      className="ml-2 block text-sm font-medium leading-6 text-red-600"
                    >
                      {errors.role}
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
                            <label className="select-none font-medium text-green-700">
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
    </>
  );
}
