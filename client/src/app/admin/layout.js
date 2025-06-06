"use client"

import { AdminSidebar } from "@/components/adminSidebar"
import CustomNavbar from "@/components/navbar/header/page"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <AdminSidebar/>
      <CustomNavbar/>
      <SidebarInset>
        <header className="flex h-16 items-center gap-4 border-b  px-6">
          <SidebarTrigger />
          <div className="flex-1" />
        </header>
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
