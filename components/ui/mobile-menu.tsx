import { MenuIcon } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MainNav } from './main-nav'

export const MobileMenu = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <MenuIcon className="h-12 w-12 text-white cursor-pointer"/> 
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>MENU</SheetTitle>

            <SheetDescription className="">
                <MainNav className="flex-col text-black mt-[40px] ml-[30px]" />
            </SheetDescription>
            </SheetHeader>

        </SheetContent>
    </Sheet>

  )
}
