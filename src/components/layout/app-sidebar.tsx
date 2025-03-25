"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Briefcase, Car, Home, Users, Wrench } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { UserButton } from "@clerk/nextjs";

export const SIDEBAR_NAVLINK = [
  {
    title: "Painel",
    url: "/",
    icon: Home,
  },
  {
    title: "Clientes",
    url: "/customers",
    icon: Users, // Usuarios
  },
  {
    title: "Técnicos",
    url: "/technical",
    icon: Briefcase, // Ícono de maletín para técnicos
  },
  {
    title: "Carros",
    url: "/cars",
    icon: Car, // Ícono específico para carros
  },
  {
    title: "Ordens",
    url: "/orders",
    icon: Wrench, // Ícono de llave inglesa para serviços
  },
];

function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row py-4 px-2 justify-center items-center">
        <h2 className="text-2xl font-semibold">Mechanical</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent className="px-2">
          <SidebarMenu>
            {SIDEBAR_NAVLINK.map((item) => {
              const isActive = pathname === item.url;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    size="lg"
                    className={`transition-colors duration-200 ease-in-out ${
                      isActive
                        ? "!bg-muted-foreground/10 !text-primary font-bold shadow-sm" // Mantiene el color activo
                        : "text-muted-foreground hover:bg-primary/10"
                    }`}
                    asChild
                  >
                    <Link
                      href={item.url}
                      className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ease-in-out 
        ${isActive ? "!text-primary" : "hover:text-primary"}`} // Solo cambia el texto si NO está activo
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter className="w-full py-4 px-2 flex flex-row items-center">
        <UserButton />
        <p className="text-base">Perfil</p>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
