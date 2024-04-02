"use client"
import Link from "next/link"
import data from '@/mocks/menu-nav.json'
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils";

export const MainNav = ({className}: { className: string}) => {

  const pathname = usePathname();

  return (
    <nav>
        <ul className={`capitalize flex ${className} justify-between gap-12 text-base font-medium`}>
            {
                data.map((item,idx)=>{
                return <li key={idx}>
                <Link href={item.link}>
                    <div className={cn("transition-all hover:text-primary_color",pathname===item.link ? 
                        "hover:text-primary_color hover:bg-white rounded-[20px] bg-primary_color p-[10px] min-w-[116px] text-center text-black"
                    : ""
                    )}>
                        {item.label}
                    </div>
                </Link>
                </li>
                })
            }
            
        </ul>
    </nav>
  )
}
