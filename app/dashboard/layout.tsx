"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 760px)");

  return (
    <div className='grid md:grid-cols-[250px_1fr] h-screen'>
      {/* Desktop menu */}
      <MainMenu className='hidden md:flex' />

      {/* Mobile menu */}
      {!isDesktop && (
        <div className='p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-b-border'>
          <MenuTitle />
          <Drawer direction='right'>
            <DrawerTrigger>
              <button aria-label='Open menu'>
                <MenuIcon />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}

      {/* Main content */}
      <div className='overflow-auto py-2 px-4'>
        <h1 className='pb-4'>Welcome back, Mike</h1>
        {children}
      </div>
    </div>
  );
}
