import React from "react";
import _ from "lodash";

function TableBody(props) {
  const renderCell = (item, culomns) => {
    if (culomns.content) return culomns.content(item);

    return _.get(item, culomns.path);
  };
  const setKey = (items, culomn) => {
    return items.id + (culomn.path || culomn.key);
  };
  return (
    <tbody>
      {props.data.map((d) => (
        <tr key={d.id}>
          {props.culomns.map((c) => (
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
