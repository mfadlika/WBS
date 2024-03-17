import { default as NextLink } from "next/link";
import React from "react";

interface Style {
  style?: {};
  className?: string;
}

interface NavProps extends Style {
  children: React.ReactNode;
}

export default function Nav({ children, style, className }: NavProps) {
  return (
    <nav
      className={`${
        className + " "
      } fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
      style={style}
    >
      {children}
    </nav>
  );
}

interface NavLinkProps extends NavProps {
  href: string;
  role?: string;
}

export function NavLink({
  children,
  href = "#",
  className,
  role = undefined,
}: NavLinkProps) {
  return (
    <NextLink
      href={href}
      className={`${
        className + " "
      } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
      role={role}
    >
      {children}
    </NextLink>
  );
}
