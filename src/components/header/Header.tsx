import { Box, List, Text } from "@/lib";
import { Button, ToggleButton } from "@/lib/form";
import Nav, { NavLink } from "@/lib/link";
import { useTheme } from "next-themes";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import Flag from "../svg/Flag";
import Icon from "../svg/Icon";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Header(props: LayoutProps): ReactElement {
  const { theme, setTheme } = useTheme();
  const router: NextRouter = useRouter();

  const { pathname, query, asPath } = router;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth > 640) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <header id="header" className="justify-center sticky top-0 z-50">
      <Nav>
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Button
                className="max-sm:bg-transparent max-sm:text-black sm:hidden"
                type="button"
                onClick={() => {
                  setIsOpen((prevState) => !prevState);
                }}
              >
                <span className="sr-only">Open sidebar</span>
                {Icon.burgerIcon}
              </Button>
              <Link href="/" className="flex ml-2 md:mr-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  ANONANCY
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                    onClick={() => {
                      setIsShow((prevState) => !prevState);
                    }}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <Box
                  className={`${
                    isShow ? " " : "hidden "
                  } fixed top-9 right-3 z-50 bg-white border border-gray-400 dark:bg-gray-800 divide-y-2`}
                >
                  <div className="px-4 py-3" role="none">
                    <Text>Neil Sims</Text>
                    <Text>neil.sims@flowbite.com</Text>
                  </div>
                  <ul className="py-1" role="none">
                    <List>
                      <NavLink
                        href="#"
                        className="text-sm rounded-none"
                        role="menuitem"
                      >
                        Dashboard
                      </NavLink>
                      <NavLink
                        href="#"
                        className="text-sm rounded-none"
                        role="menuitem"
                      >
                        Settings
                      </NavLink>
                      <NavLink
                        href="#"
                        className="text-sm rounded-none"
                        role="menuitem"
                      >
                        Sign out
                      </NavLink>
                    </List>
                  </ul>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </Nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 ${
          isOpen ? " translate-x-0 " : " "
        } sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            <List>
              <NavLink href="/">
                {Icon.feed}
                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
              </NavLink>

              {/* <NavLink href="chat">
                {Icon.inbox}
                <span className="flex-1 ml-3 whitespace-nowrap">Chat</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </NavLink> */}

              <NavLink
                className={pathname == "/admin" ? "hidden" : ""}
                href="/signin"
              >
                {Icon.signIn}
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </NavLink>
            </List>
            <div className="flex mt-8">
              <ToggleButton
                value="Dark Mode"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                params={theme === "light" ? false : true}
              ></ToggleButton>
            </div>

            {/* <Box>
              <p className="text-center max-w-xl mb-5 font-bold leading-tight tracking-tight text-black dark:text-white">
                Switch Language
              </p>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center px-2.5 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-700"
                >
                  <Link href={{ pathname, query }} as={asPath} locale={"en"}>
                    {Flag.ukFlag}
                  </Link>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-2.5 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-700"
                >
                  <Link href={{ pathname, query }} as={asPath} locale={"id"}>
                    {Flag.idFlag}
                  </Link>
                </button>
              </div>
            </Box> */}
          </ul>
        </div>
      </aside>
      <main id="main" className="sm:ml-64">
        {props.children}
      </main>
    </header>
  );
}
