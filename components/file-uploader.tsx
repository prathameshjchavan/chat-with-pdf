"use client";

import { Fragment, useCallback, useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  RocketIcon,
  SaveIcon,
} from "lucide-react";
import useUpload, { StatusText } from "@/hooks/use-upload";
import { useRouter } from "next/navigation";

const STATUS_ICONS: { [key in StatusText]: JSX.Element } = {
  [StatusText.UPLOADING]: <RocketIcon className="h-20 w-20 text-indigo-600" />,
  [StatusText.UPLOADED]: (
    <CheckCircleIcon className="h-20 w-20 text-indigo-600" />
  ),
  [StatusText.SAVING]: <SaveIcon className="h-20 w-20 text-indigo-600" />,
  [StatusText.GENERATING]: (
    <HammerIcon className="h-20 w-20 animate-bounce text-indigo-600" />
  ),
};

const FileUploader = () => {
  const { progress, status, fileId, handleUpload } = useUpload();
  const router = useRouter();
  const uploadInProgress = useMemo(
    () => progress !== null && progress >= 0 && progress <= 100,
    [progress],
  );

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        await handleUpload(file);
      } else {
        // do nothing
      }
    },
    [handleUpload],
  );
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        "application/pdf": [".pdf"],
      },
    });

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
      {uploadInProgress && (
        <div className="mt-32 flex flex-col items-center justify-center gap-5">
          <div
            className={`radial-progress border-4 border-indigo-600 bg-indigo-300 text-white ${progress === 100 && "hidden"}`}
            role="progressbar"
            style={{
              // @ts-ignore
              "--value": progress,
              "--size": "12rem",
              "--thickness": "1.3rem",
            }}
          >
            {progress}%
          </div>

          {/* @ts-ignore */}
          {STATUS_ICONS[status]}

          <p className="animate-pulse text-indigo-600">{status?.toString()}</p>
        </div>
      )}
      {!uploadInProgress && (
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
      )}
    </div>
  );
};

export default FileUploader;
