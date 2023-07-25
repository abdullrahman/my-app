"use client";
import React from "react";

export default function CheckboxField(props) {
  return (
    // <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //   <div className="sm:col-span-3">
    //     <fieldset>
    //       <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
    //         <div className="relative flex items-start py-4">
    //           <div className="min-w-0 flex-1 text-sm leading-6">
    //             <label className="select-none font-medium text-gray-900">
    //               {props.label} ?
    //             </label>
    //           </div>
    //           <div className="ml-3 flex h-6 items-center">
    //             <input
    //               id={props.id}
    //               value={props.value}
    //               type="checkbox"
    //               onChange={props.onChange}
    //               className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </fieldset>
    //   </div>
    // </div>

    <li>
      <input
        id={props.id}
        value={props.value}
        type="checkbox"
        onChange={props.onChange}
        className="hidden"
      />
      <label className="flex items-center w-full justify-center p-4 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-300 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-black  dark:hover:bg-gray-700">
        <div className="block">
          <div className="w-full text-lg font-semibold">{props.value}</div>
          <div className="w-full text-sm"></div>
        </div>
      </label>
    </li>
  );
}
