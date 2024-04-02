import { Inter } from "next/font/google";
import localFont from "next/font/local"

// Inter fonts 
export const inter = Inter({ subsets: ["latin"] });

// Inter fonts local
export const interLocal = localFont({
    src: "../public/fonts/inter/inter.ttf"
})
