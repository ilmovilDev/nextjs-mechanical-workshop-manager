import React, { ReactNode } from "react";
import AppSidebar from "./app-sidebar";
import { SidebarTrigger } from "../ui/sidebar";
import { ModeToggle } from "../mode-toggle";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <AppSidebar />
      <main className="flex w-full min-h-full flex-col p-4 gap-y-4 overflow-hidden">
        <header className="flex items-center gap-x-2">
          <SidebarTrigger className="p-5" />
          <ModeToggle />
        </header>
        {children}
      </main>
    </React.Fragment>
  );
}

export default Layout;
