import React from "react";

export default function loading() {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-[50%] items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="animate-pulse rounded-md p-4 max-w-lg w-full ml-10 my-40">
          <div className="rounded-md bg-slate-700 px-3 py-3 my-2 flex text-center text-sm font-semibold text-white shadow-sm ">
            Loading...
          </div>
          <div class=" flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
