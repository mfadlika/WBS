import PostCard from "@/components/PostCard";
import PostModal from "@/components/PostModal";
import Card from "@/lib/card";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement, useEffect, useState } from "react";

interface Messages {
  id: number;
  name: string;
  date: string;
  message: string;
  status: number;
  rating: number;
}
[];

const postMessage: Messages[] = [
  {
    id: 1,
    name: "Lisa",
    date: "13 Mei 2023",
    message: "Help me!",
    status: 1,
    rating: 2,
  },
  {
    id: 2,
    name: "Klee",
    date: "12 Mei 2023",
    message: "Help me!",
    status: 2,
    rating: 2,
  },
  {
    id: 3,
    name: "Venti",
    date: "10 Mei 2023",
    message: "Help me!!!!!",
    status: 1,
    rating: 1,
  },
  {
    id: 4,
    name: "Wanderer",
    date: "8 Mei 2023",
    message: "Help me!!!!!!!",
    status: 3,
    rating: 2,
  },
];

export default function Home(): ReactElement {
  const [post, setPost] = useState<string>("");
  const [section, setSection] = useState<number>(1);
  const [mes, setMes] = useState<number>();

  const moveForward = async (option: Messages) => {
    option.status += 1;
    setMes(option.status);
  };

  const moveBack = async (option: Messages) => {
    option.status -= 1;
    setMes(option.status);
  };

  useEffect(() => {
    console.log(mes);
  }, []);

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
              onClick={() => setSection(1)}
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
              onClick={() => setSection(2)}
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
              onClick={() => setSection(3)}
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
          <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            {postMessage
              .sort((a: Messages, b: Messages) =>
                section == 1 ? a.id - b.id : a.rating - b.rating
              )
              .map((option: Messages, index: number) => {
                if (option.status != section) {
                  return;
                }
                return (
                  <div key={option.id}>
                    <li>
                      <PostCard message={option}></PostCard>
                      <div className="justify-center">
                        <button
                          className={
                            option.status == 1
                              ? "hidden"
                              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded-full"
                          }
                          onClick={() => {
                            moveBack(option);
                          }}
                        >
                          Move Back
                        </button>
                        <button
                          className={
                            option.status == 3
                              ? "hidden"
                              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded-full"
                          }
                          onClick={() => {
                            moveForward(option);
                          }}
                        >
                          Move Forward
                        </button>
                      </div>
                    </li>
                  </div>
                );
              })}
          </ol>
        </div>
      </div>
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
