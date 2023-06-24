export function getColumns(data) {
  let extractColumns = [];
  let columns = [{}];
  if (data[0]) {
    extractColumns = Object.keys(data[0]);
    extractColumns.map((c) => {
      columns.push({ path: c, label: c.toLocaleUpperCase() });
    });
  } else columns = [{ path: "No Data", label: "No Data" }];

  return columns;
}
