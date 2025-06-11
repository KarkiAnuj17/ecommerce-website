"use client"

import { AdminSidebar } from "@/components/adminSidebar"
import CustomNavbar from "@/components/navbar/header/page"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="fixed top-0 left-0 h-full z-50">
          <AdminSidebar />
        </div>      
         <div className="fixed top-0 left-0 right-0 z-40">
            <CustomNavbar />
          </div>
      <SidebarInset>
        <header className=" fixed items-center text-white pt-20">
          <SidebarTrigger />
          <div className="flex-1" />
        </header>
        <main className="flex-1 pt-11">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
