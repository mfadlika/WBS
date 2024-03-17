import React, { Dispatch, SetStateAction, useState } from "react";
import Form, { Button, Input, TextArea } from "@/lib/form";
import { postData } from "@/pages/api/auth";

interface PostProps {
  post: string;
  setPost: Dispatch<SetStateAction<string>>;
}

export default function PostModal({ post, setPost }: PostProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  async function submitHandler(event: any) {
    event.preventDefault();
    postData(post);
  }
  return (
    <div>
      <button
        className="fixed z-50 bottom-8 right-8 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsClicked(!isClicked)}
      >
        {isClicked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={60}
            height={60}
            fill="white"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={60}
            height={60}
            fill="white"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        )}
      </button>

      <div
        id="defaultModal"
        aria-hidden="true"
        className={`absolute top-0 z-10 ${
          isClicked ? " " : "hidden "
        } w-max h-max mx-auto pt-16 overflow-x-hidden overflow-y-auto inset-0`}
      >
        <div className="relative w-full h-full max-w-2xl h-max mt-16 mx-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-600">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Post something cool
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={() => setIsClicked(!isClicked)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <Form onSubmit={submitHandler}>
                <TextArea
                  row={8}
                  col={50}
                  placeholder="Post something cool"
                ></TextArea>
                <Button
                  value="Post"
                  type="submit"
                  className="w-full text-white dark:text-black bg-rose-500"
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
