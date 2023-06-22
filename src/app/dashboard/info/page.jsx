// "use client";
import { React } from "react";
import InfoTable from "./components/infoTable";
export default function Info() {
  // const [sortedCulomns, setSortedCulomns] = useState({
  //   culomn: "",
  //   order: "",
  //   sorted: false,
  // });
  // const culomns = [
  //   {
  //     path: "id",
  //     label: "ID",
  //   },
  //   {
  //     path: "name",
  //     label: "Name",
  //   },
  //   {
  //     path: "email",
  //     label: "Email",
  //   },
  //   {
  //     path: "password",
  //     label: "Password",
  //   },
  //   {
  //     path: "role",
  //     label: "Role",
  //   },
  //   // {
  //   //   key: "img",
  //   //   content: (item) => (
  //   //     <img
  //   //       src={`data:image/jpg;base64,${item.imgBase64Path}`}
  //   //       width="75"
  //   //       height="75"
  //   //     />
  //   //   ),
  //   // },
  //   {
  //     key: "delete",
  //     content: (item) => (
  //       <Link
  //         className="text-indigo-600 hover:text-indigo-900"
  //         href={`/Employee/${item.id}`}
  //       >
  //         Delete<span className="sr-only"></span>
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "Edit",
  //     content: (item) => (
  //       <Link
  //         className="text-indigo-600 hover:text-indigo-900"
  //         href={`/Employee/${item.id}`}
  //       >
  //         Edit<span className="sr-only"></span>
  //       </Link>
  //     ),
  //   },
  // ];
  // const materiaData = [
  //   {
  //     id: "1",
  //     name: "emp",
  //     email: "emp@e.com",
  //     password: "****",
  //     role: "admin",
  //   },
  //   {
  //     id: "2",
  //     name: "emp2",
  //     email: "emp2@e.com",
  //     password: "****",
  //     role: "emp",
  //   },
  //   {
  //     id: "3",
  //     name: "emp3",
  //     email: "emp3@e.com",
  //     password: "****",
  //     role: "admin",
  //   },
  //   {
  //     id: "4",
  //     name: "emp4",
  //     email: "emp4@e.com",
  //     password: "****",
  //     role: "emp",
  //   },
  // ];
  // const handelOnSort = () => {
  //   // setSortedCulomns(sortedCulomns);
  //   const result = [...data];
  //   const sortedData = _.orderBy(
  //     result
  //     // [sortedCulomns.culomn],
  //     // [sortedCulomns.order]
  //   );
  //   setData(sortedData);
  // };

  // const handelDelete = async (emp) => {
  //   if (window.confirm("Are You Sure You Want To Delete ?")) {
  //     const oldData = data;
  //     try {
  //       await deleteEmpoyee(emp.id);
  //       const empId = data.filter((data) => {
  //         return data.id !== emp.id;
  //       });
  //       setData(empId);
  //     } catch (ex) {
  //       if (ex.response && ex.response.status <= 400)
  //         alert("This Employee has been deleted");
  //       setData(oldData);
  //     }
  //   }
  // };
  // const handelSearch = async (e) => {
  //   let filterd = data;
  //   filterd = data.filter((all) =>
  //     all[searchCulomn].toLowerCase().startsWith(e.toLowerCase())
  //   );
  //   setData(filterd);
  //   if (e === "") {
  //     const result = await getEmp();
  //     setData(result.data);
  //   }
  // };
  return (
    <div>
      <InfoTable />
    </div>
  );
}
