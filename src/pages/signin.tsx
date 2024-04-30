import { Box, Text } from "@/lib";
import Form, { Button, CheckBox, Input } from "@/lib/form";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { FormEvent, useState } from "react";
import signupAPI, { signinAPI } from "./api/auth";
import { NavLink } from "@/lib/link";
import { useRouter } from "next/router";
import { NextApiRequest, NextApiResponse } from "next";

export default function signin() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const navigate = (name: string) => {
    router.push(name);
  };

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (userName == "admin" && password == "admin") {
      navigate("/admin");
    }

    // const response = await fetch("http://localhost:3000/api/auth/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ userName, password }),
    // });

    // if (response.ok) {
    //   console.log("hello");
    //   router.push("/profile");
    // } else {
    //   // Handle errors
    //   console.log("error");
    // }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <Box className="w-3/12 bg-white dark:bg-gray-600 shadow xl:w-4/12">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold md:text-2xl">
              Sign in to your account
            </h1>
            <Form onSubmit={submitHandler}>
              <Input
                type="text"
                label="Your username"
                placeholder="your name"
                value={userName}
                onChange={setUserName}
              />
              <Input
                type="password"
                label="Your password"
                placeholder="********"
                value={password}
                onChange={setPassword}
              />

              <Button
                value="Sign In"
                type="submit"
                className="w-full text-white dark:text-black bg-rose-500"
              />

              <div>
                <Link
                  href="forgot"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?{" "}
                </Link>
              </div>
            </Form>
          </div>
        </Box>
      </div>
    </section>
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
