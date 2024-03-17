import { Box, Text } from "@/lib";
import Form, { Button, CheckBox, Input } from "@/lib/form";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useState } from "react";
import signupAPI from "./api/auth";

export default function signup() {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function submitHandler(event: any) {
    event.preventDefault();

    await signupAPI(email, userName, password);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <Box className="bg-white dark:bg-gray-600 shadow xl:w-4/12">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold md:text-2xl">
              Create and account
            </h1>
            <Form onSubmit={submitHandler}>
              <Input
                type="email"
                label="Your email"
                placeholder="your email"
                value={email}
                onChange={setEmail}
              />
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
              <CheckBox label="I accept the ">
                <Link
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </Link>
              </CheckBox>
              <Button
                value="Create an account"
                type="submit"
                className="w-full text-white dark:text-black bg-rose-500"
              />
              <Text>
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
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
