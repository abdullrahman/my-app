"use client";
import { React } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TsextField from "./textField";
import IsDeleted from "./isDeleted";
import SelectField from "./selectField";

export default function ProjectForm(props) {
  const { data: skilData } = props;
  console.log(skilData);
  const session = useSession();
  const route = useRouter();
  const path = useParams();

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
  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required(),
    projectBeneficiary: Yup.string().required(),
    projectType: Yup.string().required(),
    projectDesc: Yup.string().required(),
    projctSkils: Yup.string().required(),
    projectLink: Yup.string().required(),
    projectImg: Yup.string().required(),
    isDeleted: Yup.boolean(),
  });
  const notifySuccess = (message) => {
    toast.success(message, { theme: "colored" });
  };
  const notifyError = (message) => {
    toast.error(message, { theme: "colored" });
  };

  const handelSubmit = (values) => {
    console.log(values);
    // values.InfoId = session.data.id;
    // postdata(values);
  };
  const handleErrors = async (resp) => {
    notifyError(resp.statusText);
    throw new Error(resp.statusText);
  };
  const postdata = async (data) => {
    const res = await fetch(skilData ? apiUrl.setUpdate : apiUrl.setNew, {
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
          !skilData
            ? validationSchema.cast({
                projectName: "",
                projectBeneficiary: "",
                projectType: "",
                projectDesc: "",
                projctSkils: "",
                projectLink: "",
                projectImg: "",
                isDeleted: false,
              })
            : {
                projectName: skilData.skilsData.projectName,
                projectBeneficiary: skilData.skilsData.projectBeneficiary,
                projectType: skilData.skilsData.projectType,
                projectDesc: skilData.skilsData.projectDesc,
                projctSkils: skilData.skilsData.projectLink,
                projectLink: skilData.skilsData.projectLink,
                projectImg: skilData.skilsData.projectImg,
                isDeleted: skilData.skilsData.onDelete,
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

                <TsextField
                  id="projctSkils"
                  name="projctSkils"
                  label="Project Skils"
                  errors={errors.projctSkils}
                  // onChange={(val) => setFieldValue("projctSkils", val)}
                />

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
