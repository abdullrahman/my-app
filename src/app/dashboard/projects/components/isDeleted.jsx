import React from "react";
import { Field } from "formik";
export default function IsDeleted(props) {
  const { name, type, errors } = props;
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <fieldset>
          <legend className="text-base font-semibold leading-6 text-gray-900">
            {name}
          </legend>
          <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
            <div className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm leading-6">
                <label className="select-none font-medium text-gray-900">
                  {name} ?
                </label>
              </div>
              <div className="ml-3 flex h-6 items-center">
                <Field
                  name={name}
                  type={type}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                />
              </div>
            </div>
          </div>
        </fieldset>
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
