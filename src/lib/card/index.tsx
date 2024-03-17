import Link from "next/link";
import React from "react";

interface Style {
  style?: {};
  className?: string;
}

interface CardProps extends Style {
  children?: React.ReactNode;
  text?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`${
        className + " "
      } bg-white p-4 flex flex-col justify-between leading-normal dark:bg-gray-800`}
    >
      {children}
    </div>
  );
}

export function CardBody({ children, className }: CardProps) {
  return <div className={`${className + " "} mb-8`}>{children}</div>;
}

export function CardTextHeading({ text, className }: CardProps) {
  return (
    <div
      className={`${
        className + " "
      } text-gray-900 font-bold text-xl mb-2 dark:text-white`}
    >
      {text}
    </div>
  );
}

interface CardImageProps extends CardProps {
  imageURL: string;
  alt?: string;
  profileName?: string;
  href?: string;
  desc?: string;
}

export function ProfileCard({
  imageURL,
  alt = "description",
  profileName = "Your name",
  text = "Your text",
  href = "#",
  desc,
  className,
}: CardImageProps) {
  return (
    <div className={`${className + " "} flex items-center`}>
      <img className="w-10 h-10 rounded-full mr-4" src={imageURL} alt={alt} />
      <div className="text-sm">
        <Link href={href}>
          <p className="text-gray-900 leading-none dark:text-white">
            {profileName} <span className="text-xs">{desc}</span>
          </p>
        </Link>

        <p className="text-gray-600 dark:text-white">{text}</p>
      </div>
    </div>
  );
}

export function ImageCard({ imageURL, alt = "description" }: CardImageProps) {
  return (
    <div
      className="h-48 h-auto w-48 flex-none bg-cover text-center overflow-hidden"
      style={{ backgroundImage: `url(${imageURL})` }}
      title={alt}
    ></div>
  );
}
