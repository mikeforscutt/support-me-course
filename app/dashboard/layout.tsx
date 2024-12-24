import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { MenuIcon } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='grid md:grid-cols-[250px_1fr] h-screen'>
      <MainMenu className='hidden md:flex' />
      <div className='p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-b-border'>
        <MenuTitle />
        <Drawer>
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
      <div className='overflow-auto py-2 px-4'>
        <h1 className='pb-4'>Welcome back, Mike</h1>
        {children}
      </div>
    </div>
  );
}
