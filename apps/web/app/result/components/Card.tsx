import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row w-full justify-between bg-white p-4 rounded-xl shadow-sm">
      {children}
    </div>
  );
}
