import PostModal from "@/components/PostModal";
import Card from "@/lib/card";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement, useState } from "react";

interface Messages {
  id: number;
  name: string;
  date: string;
  message: string;
  status: string;
}
[];

export default function Home(): ReactElement {
  const [post, setPost] = useState<string>("");
  const [section, setSection] = useState<string>("new");

  const postMessage: Messages[] = [
    {
      id: 1,
      name: "Lisa",
      date: "13 Mei 2023",
      message: "Help me!",
      status: "new",
    },
    {
      id: 2,
      name: "Klee",
      date: "12 Mei 2023",
      message: "Help me!",
      status: "doing",
    },
    {
      id: 3,
      name: "Venti",
      date: "10 Mei 2023",
      message: "Help me!!!!!",
      status: "new",
    },
    {
      id: 4,
      name: "Wanderer",
      date: "8 Mei 2023",
      message: "Help me!!!!!!!",
      status: "done",
    },
  ];

  return (
    <div className="pt-14">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul
          className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          <li className="w-full">
            <button
              onClick={() => setSection("new")}
              id="stats-tab"
              data-tabs-target="#stats"
              type="button"
              role="tab"
              aria-controls="stats"
              aria-selected="true"
              className="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Laporan Baru
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => setSection("doing")}
              id="about-tab"
              data-tabs-target="#about"
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected="false"
              className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Laporan Ditangani
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => setSection("done")}
              id="faq-tab"
              data-tabs-target="#faq"
              type="button"
              role="tab"
              aria-controls="faq"
              aria-selected="false"
              className="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Laporan Selesai
            </button>
          </li>
        </ul>

        <div className="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          {/* <time className="text-lg font-semibold text-gray-900 dark:text-white">
            January 12th, 2022
          </time> */}

          <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            {postMessage.map((option: Messages, index: number) => {
              if (option.status != section) {
                return;
              }
              return (
                <li key={option.id}>
                  <a
                    href={"/" + option.id}
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
                          {option.name}
                        </span>
                      </div>
                      <div className="text-sm font-normal">
                        {option.message}
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <PostModal post={post} setPost={setPost}></PostModal>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
    },
  };
};
