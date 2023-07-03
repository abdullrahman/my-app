import React from "react";
import Link from "next/link";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
function Table(props) {
  return (
    <>
      <div className="mt-8 flow-root">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              {props.title}
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              href={props.href}
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {"New " + props.title}
            </Link>
          </div>
        </div>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <TableHeader
                columns={props.columns}
                sortedCulomns={props.sortedCulomns}
                onSort={props.onSort}
              />
              <TableBody data={props.data} columns={props.columns} />
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
