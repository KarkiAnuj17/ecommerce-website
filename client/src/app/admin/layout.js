import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar with fixed width */}
        <div className="w-[250px]">
          <Sidebar />
        </div>

        {/* Main content with max width and margin */}
        <main className="flex-1 max-w-5xl mx-auto p-6 bg-background text-foreground">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
