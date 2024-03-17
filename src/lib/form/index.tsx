import React, { ReactElement, useState } from "react";

type ButtonType = (params: any) => any;

interface Style {
  style?: {};
  className?: string;
}

type ButtonVariant = "button" | "reset" | "submit" | undefined;

interface FormProps extends Style {
  children: React.ReactNode;
  onSubmit: ButtonType;
}

export default function Form({
  children,
  onSubmit,
  style,
  className,
}: FormProps): ReactElement {
  return (
    <form
      className={`${className + " "} space-y-4 md:space-y-6`}
      style={style}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

interface InputProps extends Style {
  children?: React.ReactNode;
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | undefined;
  onChange?: ButtonType;
}

export function Input({
  type = "text",
  label = "",
  name = "",
  placeholder = "",
  value = undefined,
  onChange = () => {},
  style,
  className,
}: InputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      {value == undefined ? (
        <input
          style={style}
          defaultValue=""
          type={type}
          name={name}
          className={`${
            className + " "
          } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder={placeholder}
        />
      ) : (
        <input
          style={style}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${
            className + " "
          } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export function CheckBox({ children, label = "", onChange }: InputProps) {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="remember"
          aria-describedby="remember"
          type="checkbox"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          onChange={onChange}
        />
      </div>
      <div className="ml-3 text-sm">
        <label className="text-gray-500 dark:text-gray-300">
          {label}
          <>{children}</>
        </label>
      </div>
    </div>
  );
}

interface TextAreaProps extends Style {
  label?: string;
  row?: number;
  col?: number;
  placeholder?: string;
}

export function TextArea({
  label = "Your message",
  row = 4,
  col = 10,
  placeholder = "Leave a comment...",
  className,
}: TextAreaProps) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <textarea
        rows={row}
        cols={col}
        className={`${
          className + " "
        } block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
      ></textarea>
    </>
  );
}

interface ButtonProps extends Style {
  children?: React.ReactNode;
  value?: string;
  type?: ButtonVariant;
  params?: boolean;
  onClick?: ButtonType;
}

export function Button({
  children,
  value = "Click",
  type = "button",
  style,
  className,
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`${
        className + " "
      } bg-black text-white hover:bg-white hover:text-black hover:border dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg px-5 py-2.5 text-center`}
    >
      {children ? children : value}
    </button>
  );
}

export function ToggleButton({
  value = "Toggle me",
  onClick = () => {},
  params = true,
}: ButtonProps) {
  const [check, setCheck] = useState<boolean>(params);
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        onChange={(event) => {
          onClick(event);
          setCheck(!check);
        }}
        checked={check}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {value}
      </span>
    </label>
  );
}
