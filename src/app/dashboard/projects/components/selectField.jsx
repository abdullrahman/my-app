import React from "react";
import { Field } from "formik";
export default function SelectField(props) {
  const { id, name, label, options, errors } = props;
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {name}
        </label>
        <div className="mt-2">
          <Field
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name={name}
            id={id}
            component="select"
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.name}
              </option>
            ))}
          </Field>
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
