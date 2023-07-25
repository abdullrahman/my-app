"use client";
import { React, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TsextField from "./textField";
import IsDeleted from "./isDeleted";
import SelectField from "./selectField";
import CheckboxField from "./checkboxField";

export default async function ProjectForm(props) {
  const { projectData, skilData } = props;
  const session = useSession();
  const route = useRouter();
  const path = useParams();
  console.log(session);

  const apiUrl = {
    setNew: "/dashboard/skils/newSkils/api",
    setUpdate: `/dashboard/skils/${path.id}/api`,
  };

  const projectTypesOptions = [
    {
      value: "Website",
      name: "Website",
    },
    { value: "WindowsApplication", name: "WindowsApplication" },
    { value: "TestTeam", name: "TestTeam" },
  ];
  const [skilOptions, setSkilOptions] = useState([]);
  // skilData.map((sk) => {
  //   skilOptions.push({ name: sk.skil, value: sk.skil });
  // });
  console.log(skilOptions);
  const validationSchema = Yup.object().shape({
    projectName: Yup.string().nullable(),
    projectBeneficiary: Yup.string().nullable(),
    projectType: Yup.string().nullable(),
    projectDesc: Yup.string().nullable(),
    projctSkils: Yup.array(),
    projectLink: Yup.string().nullable(),
    projectImg: Yup.string().nullable(),
    isDeleted: Yup.boolean(),
  });

  // const getSkils = async () => {
  //   const res = await fetch("http://localhost:3000/dashboard/projects/api");
  //   return res.json();
  // };
  // const skilsData = await getSkils();
  const handelChange = (e) => {
    const checked = e.target.checked;
    if (checked) skilOptions.push(e.target.value);
    else {
      setSkilOptions((current) => {
        return current.filter((skil) => skil !== e.target.value);
      });
      console.log(skilOptions);
      // skilOptions.pop();
    }
    console.log(skilOptions);
  };
  const notifySuccess = (message) => {
    toast.success(message, { theme: "colored" });
  };
  const notifyError = (message) => {
    toast.error(message, { theme: "colored" });
  };

  const handelSubmit = (values) => {
    values.InfoId = session.data.id;
    values.projctSkils = skilOptions;
    console.log(values);
    // postdata(values);
  };
  const handleErrors = async (resp) => {
    notifyError(resp.statusText);
    throw new Error(resp.statusText);
  };
  const postdata = async (data) => {
    const res = await fetch(projectData ? apiUrl.setUpdate : apiUrl.setNew, {
      method: "POST",
      body: JSON.stringify({ data }),
    });

    const errorCode = res.ok ? false : res.status;
    console.log(res);
    if (errorCode) handleErrors(res);
    else {
      notifySuccess("Data Successfully Added");
      setTimeout(() => {
        route.refresh();
        route.replace("/dashboard/skils/");
      }, 4000);
    }
  };
  return (
    <div>
      <ToastContainer limit={2} />
      <Formik
        validationSchema={validationSchema}
        initialValues={
          !projectData
            ? validationSchema.cast({
                projectName: "",
                projectBeneficiary: "",
                projectType: "",
                projectDesc: "",
                projctSkils: [],
                projectLink: "",
                projectImg: "",
                isDeleted: false,
              })
            : {
                projectName: projectData.skilsData.projectName,
                projectBeneficiary: projectData.skilsData.projectBeneficiary,
                projectType: projectData.skilsData.projectType,
                projectDesc: projectData.skilsData.projectDesc,
                projctSkils: projectData.skilsData.projectLink,
                projectLink: projectData.skilsData.projectLink,
                projectImg: projectData.skilsData.projectImg,
                isDeleted: projectData.skilsData.onDelete,
              }
        }
        onSubmit={handelSubmit}
      >
        {({ errors, setFieldValue, values }) => (
          <Form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Projects Information
                </h2>
                <TsextField
                  // id="projectName"
                  name="projectName"
                  label="project Name"
                  errors={errors.projectName}
                  // onChange={(val) => setFieldValue("projectName", val)}
                />
                <TsextField
                  id="projectBeneficiary"
                  name="projectBeneficiary"
                  label="project Beneficiary"
                  errors={errors.projectBeneficiary}
                  // onChange={(val) => setFieldValue("projectBeneficiary", val)}
                />
                <SelectField
                  name="projectType"
                  id="projectType"
                  label="project Types"
                  options={projectTypesOptions}
                  errors={errors.projectType}
                />

                <TsextField
                  id="projectDesc"
                  name="projectDesc"
                  label="Project Description"
                  errors={errors.projectDesc}
                  // onChange={(val) => setFieldValue("projectDesc", val)}
                />

                {/* <SelectField
                  id="projctSkils"
                  name="projctSkils"
                  label="Project Skils"
                  options={skilOptions}
                  errors={errors.projctSkils}
                  // onChange={(val) => setFieldValue("projctSkils", val)}
                /> */}
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
                  Choose technology:
                </h3>
                <ul className="grid w-[60%] gap-4 md:grid-cols-4">
                  {skilData.map((sk) => (
                    <CheckboxField
                      id={sk.id}
                      value={sk.skil}
                      onChange={handelChange}
                      label={sk.skil}
                    />
                  ))}
                </ul>
                <TsextField
                  id="projectLink"
                  name="projectLink"
                  label="Project Link"
                  errors={errors.projectLink}
                  // onChange={(val) => setFieldValue("projectLink", val)}
                />

                <TsextField
                  id="projectImg"
                  name="projectImg"
                  label="Project Img"
                  errors={errors.projectImg}
                  // onChange={(val) => setFieldValue("projectImg", val)}
                />
                <IsDeleted
                  name="isDeleted"
                  type="checkbox"
                  errors={errors.isDeleted}
                />
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
