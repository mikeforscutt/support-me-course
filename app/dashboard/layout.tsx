"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 760px)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='md:grid md:grid-cols-[250px_1fr] h-screen'>
      {/* Desktop menu */}
      <MainMenu className='hidden md:flex' />

      {/* Mobile menu */}
      {!isDesktop && (
        <div className='p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-b-border'>
          <MenuTitle />
          <Drawer
            direction='right'
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerTrigger asChild>
              <button aria-label='Open menu'>
                <MenuIcon />
              </button>
            </DrawerTrigger>

            <DrawerContent aria-describedby='drawer-description'>
              <VisuallyHidden>
                <DialogTitle>Mobile Menu</DialogTitle>
              </VisuallyHidden>
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
