import { Text } from "@/lib";
import Card, {
  CardBody,
  CardTextHeading,
  ImageCard,
  ProfileCard,
} from "@/lib/card";
import Grid from "@/lib/grid";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { getData, postData } from "./api/auth";
import PostModal from "@/components/PostModal";

export default function Home(): ReactElement {
  const [post, setPost] = useState<string>("");
  const [posts, setPosts] = useState<any>([]);

  async function fetchData() {
    const data = await getData();
    setPosts(data);
  }

  useEffect(() => {}, []);

  return (
    <div className="pt-16">
      <h1 className="ml-2 text-3xl font-extrabold md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-900 from-red-400 underline underline-offset-3 decoration-8 decoration-gray-400 dark:decoration-gray-600">
          THIS IS HOMEPAGE!!!
        </span>
      </h1>

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
