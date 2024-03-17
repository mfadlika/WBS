import { Box, Text } from "@/lib";
import Form, { Button, CheckBox, Input } from "@/lib/form";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useState } from "react";
import { signinAPI } from "./api/auth";

export default function signin() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function submitHandler(event: any) {
    event.preventDefault();

    await signinAPI(userName, password);
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
              <div className="flex items-center justify-between">
                <CheckBox label="Remember me" />
                <Link
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                value="Sign In"
                type="submit"
                className="w-full text-white dark:text-black bg-rose-500"
              />
              <Text>
                Don’t have an account yet?{" "}
                <Link
                  href="signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </Text>
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
