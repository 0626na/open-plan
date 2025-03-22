import { type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`text-white bg-black w-80 h-16 rounded-xl flex justify-center items-center ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
