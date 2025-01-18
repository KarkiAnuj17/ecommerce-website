import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 bg-background text-foreground">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
