import React from "react";
import _ from "lodash";

function TableBody(props) {
  const renderCell = (item, columns) => {
    if (columns.content) return columns.content(item);
    if (item.onDelete === true) {
      item.onDelete = (
        <span className="inline-flex items-center rounded-md bg-red-200 px-2 py-1 text-xs font-medium text-red-700">
          Deleted
        </span>
      );
    } else if (item.onDelete === false) {
      item.onDelete = (
        <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
          Active
        </span>
      );
    } else return _.get(item, columns.path);
  };
  const setKey = (items, culomn) => {
    return items.id + (culomn.path || culomn.key);
  };
  return (
    <tbody>
      {props.data.map((d) => (
        <tr key={d.id}>
          {props.columns.map((c) => (
            <td
              Key={setKey(d, c)}
              className="whitespace-nowrap px-0 py-4 text-sm text-gray-500"
            >
              {renderCell(d, c)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
