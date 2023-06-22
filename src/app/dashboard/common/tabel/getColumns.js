export function getColumns(data) {
  const extractColumns = Object.keys(data[0]);
  let columns = [{}];
  extractColumns.map((c) => {
    columns.push({ path: c, label: c.toLocaleUpperCase() });
  });
  return columns;
}
