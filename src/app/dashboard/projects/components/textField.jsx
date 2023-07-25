import React from "react";
import { Field } from "formik";
export default function TsextField(props) {
  const { label, name, id, errors, onChange } = props;
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <Field
            name={name}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <label
          htmlFor={name}
          className="ml-2 block text-sm font-medium leading-6 text-red-600"
        >
          {errors}
        </label>
      </div>
    </div>
  );
}
