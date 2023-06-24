"use client";
import { ErrorMessage } from "@/app/dashboard/common/notifications/successfull";
const Error = ({ error, reset }) => {
  return (
    <div>
      <ErrorMessage message={error.message} />
    </div>
  );
};
export default Error;
