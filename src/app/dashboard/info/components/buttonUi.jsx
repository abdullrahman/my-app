"use client";
import { React, useState, Suspense } from "react";
import { useRouter, usePathname } from "next/navigation";
import { XCircleIcon } from "@heroicons/react/20/solid";
import {
  SuccessfulMessage,
  ErrorMessage,
} from "../../common/notifications/successfull";
import Confirmation from "../../common/modals/confirmation";
import Processing from "../../common/modals/processing";
export default function ButtonUi(props) {
  const rout = useRouter();
  const path = usePathname();

  const [status, setStatus] = useState(null);
  const [messageShow, setMessageShow] = useState(false);
  const [message, setMessage] = useState("");

  const [confirmShow, setConfirmShow] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);
  console.log(messageShow, confirmShow, status);
  const handleErrors = async (resp) => {
    setConfirmShow(false);
    setMessageShow(true);
    setMessage(resp.statusText);
    throw new Error(resp.statusText);
  };

  const handelSubmit = () => {
    deleteInfo(props.item);
  };
  const deleteInfo = async (item) => {
    setShowProcessing(true);
    const res = await fetch("/dashboard/info/api", {
      method: "POST",
      body: JSON.stringify({ item }),
    });
    setStatus(res.ok ? true : false);
    const errorCode = res.ok ? false : res.status;
    if (errorCode) handleErrors(res);
    else {
      setConfirmShow(false);
      setMessageShow(true);
      setMessage("Successsfully Deleted");
      rout.replace(path);
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
          title={"Delete Info"}
          content={"Are you Sure You Want To Delete Info ? "}
          onConfirmClick={handelSubmit}
          onHandelConfirmShow={handelConfirmShow}
        />
      )}
      {messageShow && status ? <SuccessfulMessage message={message} /> : <></>}
      {messageShow && !status ? <ErrorMessage message={message} /> : <></>}
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
