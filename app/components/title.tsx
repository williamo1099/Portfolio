import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <h2 className="text-3xl lg:text-4xl font-bold">{children}</h2>;
}
