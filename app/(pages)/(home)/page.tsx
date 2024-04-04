import { Fragment } from "react";
import { HeroOne } from "@/components/wrappers/hero/hero-one";
import { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";

export default function Home() {
  return (
   <Fragment>
      <HeroOne/>
   </Fragment>
  );
}

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Buy a beautiful bike you need for your travel',
  openGraph: mergeOpenGraph({
    title: 'Home page',
    url: '/',
  }),
}

