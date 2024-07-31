"use client";

import { Fragment, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  RocketIcon,
  SaveIcon,
} from "lucide-react";
import useUpload from "@/hooks/use-upload";

const FileUploader = () => {
  const { progress, status, fileId, handleUpload } = useUpload();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file) {
      // await handleUpload(file);
    } else {
      // do nothing
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        "application/pdf": [".pdf"],
      },
    });

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
      <div
        {...getRootProps()}
        className={`mt-10 flex h-96 w-[90%] items-center justify-center rounded-lg border-2 border-dashed border-indigo-600 p-10 text-indigo-600 ${isDragActive || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center">
          {isDragActive ? (
            <Fragment>
              <RocketIcon className="mb-5 h-20 w-20 animate-ping" />
              <p>Drop the files here ...</p>
            </Fragment>
          ) : (
            <Fragment>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>
                Drag &apos;n&apos; drop some files here, or click to select
                files
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
