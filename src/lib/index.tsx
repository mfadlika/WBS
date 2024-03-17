import React from "react";

interface Style {
  style?: {};
  className?: string;
}

export default function Section() {
  return <section></section>;
}

interface ListProps extends Style {
  children: React.ReactNode;
}

export function List({ children }: ListProps) {
  return (
    <ul>
      {React.Children.map(children, (e, i) => {
        return <li key={i}>{e}</li>;
      })}
    </ul>
  );
}

interface TextProps extends Style {
  children: React.ReactNode;
}

export function Text({ children, className }: TextProps) {
  return (
    <p className={`${className + " "} text-sm text-black dark:text-white`}>
      {children}
    </p>
  );
}

interface BoxProps extends Style {
  children: React.ReactNode;
}

export function Box({ children, className }: BoxProps) {
  return (
    <div
      className={`${
        className + " "
      } mt-5 py-4 text-left bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken`}
    >
      {children}
    </div>
  );
}
