import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Providers } from "@/providers";
import { cn } from "@/lib/utils";

//SEO GLOBAL
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL ||  'http://localhost:3000/'),
  applicationName:'bike shop',
  keywords:['nextjs','ecommerce','shop','netlify'],
  authors: [{ name:'sylvaincodes',url:'https://sylvaincodes.vercel.app' }],
  publisher:'netlify',

  alternates:{
    canonical:'/',
    languages:{
      'fr':'fr'
    }
  },

  robots:{
    index:false,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      noimageindex:false
    }
  },

  manifest: `  ${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.json`,

  icons:{
    icon:'/favicon.ico',
    shortcut:'/favicon.ico',
    apple:'/favicon.ico'
  },

  twitter:{
    card:'summary_large_image',
    title: 'Bike shop',
    description: 'Buy a beautiful bike you need for your travel',
    siteId:'',
    creator:'sylvaincodes',
    images:[` ${process.env.NEXT_PUBLIC_SERVER_URL}/images/og.jpg`]
  },


openGraph: mergeOpenGraph()

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn('animate-loading-transition',inter.className)} >
        <Providers>
          {children}
        </Providers>  
        
      </body>
    </html>
  );
}
