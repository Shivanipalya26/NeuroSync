import React, { FC } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: React.ReactNode;
  htmlFor?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  rounded?: "regular" | "full";
  className?: string;
};

const variantClasses = {
  primary: "bg-blue-700 hover:bg-blue-600 text-white transition duration-300",
  secondary:
    "border border-blue-500 hover:bg-blue-700 text-blue-300 hover:text-white transition duration-300",
};

const roundedClasses = {
  regular: "rounded-md",
  full: "rounded-full",
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  rounded = "regular",
  htmlFor = "button",
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`py-2 px-4 ${variantClasses[variant]} ${roundedClasses[rounded]} ${className}`}
      onClick={onClick}
      type={htmlFor}
      {...props}
    >
      {children}
    </button>
  );
};

type LinkButtonProps = {
  children?: React.ReactNode;
  to: string;
  target?: "_blank" | "_self";
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  rounded?: "regular" | "full";
};

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  to,
  target = "_self",
  onClick,
  variant = "primary",
  className,
  rounded = "regular",
  ...props
}) => {
  const isExternal = to?.startsWith("http") || to?.startsWith("www");

  return isExternal ? (
    <a
      href={to}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`py-2 px-4 rounded w-full ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link
      to={to}
      className={`py-2 px-4 ${variantClasses[variant]} ${roundedClasses[rounded]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};
