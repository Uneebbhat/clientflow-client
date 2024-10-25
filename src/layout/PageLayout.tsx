import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <>
      <div>
        <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
        <Separator className="mt-2 mb-4" />
        <section>{children}</section>
      </div>
    </>
  );
};

export default PageLayout;
