import Header from "@/components/header";
import { ClerkLoaded } from "@clerk/nextjs";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <ClerkLoaded>
      <div className="flex h-screen flex-1 flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </ClerkLoaded>
  );
};

export default DashboardLayout;
