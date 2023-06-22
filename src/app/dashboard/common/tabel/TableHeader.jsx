import { React } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import _ from "lodash";
function TableHeader(props) {
  // const setSort = (culomn) => {
  //   const sortColumn = props.sortedCulomns;
  //   sortColumn.culomn = culomn;
  //   sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  //   sortColumn.sorted = true;
  //   props.onSort(sortColumn);
  // };
  // const renderSortIcon = (column) => {
  //   const sortColumn = props.sortedCulomns;
  //   if (column === sortColumn.culomn) {
  //     if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
  //     return <i className="fa fa-sort-desc"></i>;
  //   }
  // };
  return (
    <thead>
      <tr>
        {props.culomns.map((c) => (
          <th
            key={c.path || c.key}
            // onClick={() => setSort(c.path)}
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
          >
            {/* {c.label} {renderSortIcon(c.path)} {c.filter} */}
            {c.label}
            <a href="#" className="group inline-flex">
              <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
