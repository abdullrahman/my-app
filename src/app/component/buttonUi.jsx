"use client";
import { React, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { XCircleIcon } from "@heroicons/react/20/solid";
import Confirmation from "../dashboard/common/modals/confirmation";
import Processing from "../dashboard/common/modals/processing";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ButtonUi(props) {
  const rout = useRouter();
  const path = usePathname();

  const [confirmShow, setConfirmShow] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);

  const notifySuccess = (message) => {
    toast.success(message, { theme: "colored" });
  };
  const notifyError = (message) => {
    toast.error(message, { theme: "colored" });
  };
  const handleErrors = async (resp) => {
    setConfirmShow(false);
    notifyError(resp.statusText);
    throw new Error(resp.statusText);
  };

  const handelSubmit = () => {
    deleteInfo(props.item);
  };
  const deleteInfo = async (item) => {
    setShowProcessing(true);
    const res = await fetch(props.url, {
      method: "POST",
      body: JSON.stringify({ item }),
    });
    const errorCode = res.ok ? false : res.status;
    if (errorCode) handleErrors(res);
    else {
      setConfirmShow(false);
      setTimeout(() => {
        notifySuccess(props.title + " Deleted Successfully");
        rout.refresh();
        rout.replace(path);
      }, 1000);
    }
    setShowProcessing(false);
  };

  const handelConfirmShow = () => {
    setConfirmShow(!confirmShow);
  };
  return (
    <>
      {showProcessing && <Processing message={"Deleting..."} />}
      {confirmShow && (
        <Confirmation
          title={"Delete " + props.title}
          content={`Are you Sure You Want To Delete ${props.title} ? `}
          onConfirmClick={handelSubmit}
          onHandelConfirmShow={handelConfirmShow}
        />
      )}
      <ToastContainer limit={2} />
      <button
        type="submit"
        className="text-indigo-600 hover:text-indigo-900"
        onClick={() => setConfirmShow(true)}
      >
        <span className="sr-only"></span>
        <XCircleIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </>
  );
}
