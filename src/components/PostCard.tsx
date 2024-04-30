import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Messages {
  id: number;
  name: string;
  date: string;
  message: string;
  status: number;
  rating: number;
}
[];

interface PostProps {
  message: Messages;
  //   setMes: Dispatch<SetStateAction<string>>;
}

export default function PostCard({ message }: PostProps) {
  return (
    <a
      href={"/" + message.id}
      className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <img
        className="mr-4 w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
        src=""
        alt="image"
      />
      <div className="text-gray-600 dark:text-gray-400">
        <div className="text-base font-normal">
          <span className="font-medium text-gray-900 dark:text-white">
            {message.name}
          </span>
        </div>
        <div className="text-sm font-normal">{message.message}</div>
      </div>
    </a>
  );
}
