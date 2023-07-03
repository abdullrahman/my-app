import React from "react";

export default function loading() {
  return (
    <>
      <div className="animate-pulse rounded-md p-4 ">
        <div className="mt-8 flow-root">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Loading...
              </h1>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
          </div>
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-2 pr-0 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-2 pr-0 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="whitespace-nowrap px-0 py-4 text-sm text-gray-500">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-0 py-4 text-sm text-gray-500">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-0 py-4 text-sm text-gray-500">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-3"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="fixed inset-0 z-10 overflow-y-auto">
    //   <div className="flex min-h-[50%] items-end justify-center p-4 text-center sm:items-center sm:p-0">
    //     <div class="animate-pulse rounded-md p-4 max-w-lg w-full ml-10 my-40">
    //       <div className="rounded-md bg-slate-700 px-3 py-3 my-2 flex text-center text-sm font-semibold text-white shadow-sm ">
    //         Loading...
    //       </div>
    //       <div class=" flex space-x-4">
    //         <div class="rounded-full bg-slate-700 h-10 w-10"></div>
    //         <div class="flex-1 space-y-6 py-1">
    //           <div class="h-2 bg-slate-700 rounded"></div>
    //           <div class="space-y-3">
    //             <div class="grid grid-cols-3 gap-4">
    //               <div class="h-2 bg-slate-700 rounded col-span-2"></div>
    //               <div class="h-2 bg-slate-700 rounded col-span-1"></div>
    //             </div>
    //             <div class="h-2 bg-slate-700 rounded"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
