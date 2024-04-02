import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Grid } from "@/components/ui/grid"
import { Icons } from "@/components/ui/icons"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const HeroOne = () => {
  return (
    <section className="mt-20 animate-loading-animation">
      <Container>
      <Carousel className="w-full lg:min-w-screen ">
      <CarouselContent>
        
        <CarouselItem>
        <Grid className="grid-cols-1 lg:grid-cols-3 gap-x-16 mt-8 lg:mt-0">
          <div className="relative col-span-2 w-full hidden lg:block">
            <Image src="/images/hero-bike.svg" width="1127" height="757" alt="hero-bike" />
            <Image className="absolute right-0 bottom-28" src="/shapes/shape_1.svg" 
            width="50" height="50" alt="hero-bike" />
            <div className="absolute bottom-0 w-full">
              <div className="grid grid-cols-4 rounded-[80px] bg-bg_hero text-white w-full 
              px-8 py-2 text-center opacity-60">
                  <div className="flex flex-col gap-4">
                      <span className="text-[36px] font-medium">750 W</span>
                      <span className="text-base font-medium">motor</span>
                  </div><div className="flex flex-col gap-4">
                      <span className="text-[36px] font-medium">750 W</span>
                      <span className="text-base font-medium">motor</span>
                  </div><div className="flex flex-col gap-4">
                      <span className="text-[36px] font-medium">750 W</span>
                      <span className="text-base font-medium">motor</span>
                  </div><div className="flex flex-col gap-4">
                      <span className="text-[36px] font-medium">750 W</span>
                      <span className="text-base font-medium">motor</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="bg-p-8 col-span-1 place-self-center">
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-primary_color text-[32px] lg:text-[48px] font-medium capitalize m-0 p-0">hubble</h2>
                <h1 className="text-white text-[92px] lg:text-[105px] font-medium capitalize m-0 p-0" >bike</h1>
                <p className="text-center max-w-lg lg:max-w-2xl  lg:text-left text-pretty text-sm lg:text-[18px] text-white inline-flex leading-8">
                Hire a bike to any destination and share with friends,
                Please use the app to order a bike from any where in Brimingham...
                </p>

                <Button variant="default" className="hover:bg-white hover:text-primary_color bg-primary_color text-white mt-10 w-full py-7 text-[24px] rounded-[30px]">
                  Hire a Bike
                </Button>

              </div>
              <div className="mt-10">
              <Icons />
              </div>
          </div>
        </Grid>
        </CarouselItem>
        
        <CarouselItem>
        <Grid className="grid-cols-1 lg:grid-cols-3 gap-x-16 mt-8 lg:mt-0">
          <div className="relative col-span-2 w-full hidden lg:block">
            <Image src="/images/hero-bike.svg" width="1127" height="757" alt="hero-bike" />
            <Image className="absolute right-0 bottom-28" src="/shapes/shape_1.svg" 
            width="50" height="50" alt="hero-bike" />
            <div className="absolute bottom-0 w-full">
              <div className="grid grid-cols-4 rounded-[80px] bg-bg_hero text-white w-full 
              px-8 py-2 text-center opacity-60">
                  <div className="flex flex-col gap-4">
                      <span className="text-[36px] font-medium">750 W</span>
                      <span className="text-base font-medium">motor</span>
                  </div><div className="flex flex-col gap-4">
                      <span className="text-[36px] font-medium">750 W</span>
                      <span className="text-base font-medium">motor</span>
                  </div><div className="flex flex-col gap-4">
                      <span className="text-[36px] font-medium">750 W</span>
                      <span className="text-base font-medium">motor</span>
                  </div><div className="flex flex-col gap-4">
                      <span className="text-[36px] font-medium">750 W</span>
                      <span className="text-base font-medium">motor</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="bg-p-8 col-span-1 place-self-center">
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-primary_color text-[32px] lg:text-[48px] font-medium capitalize m-0 p-0">hubble</h2>
                <h1 className="text-white text-[92px] lg:text-[105px] font-medium capitalize m-0 p-0" >bike</h1>
                <p className="text-center max-w-lg lg:max-w-2xl  lg:text-left text-pretty text-sm lg:text-[18px] text-white inline-flex leading-8">
                Hire a bike to any destination and share with friends,
                Please use the app to order a bike from any where in Brimingham...
                </p>

                <Button variant="default" className="hover:bg-white hover:text-primary_color bg-primary_color text-white mt-10 w-full py-7 text-[24px] rounded-[30px]">
                  Hire a Bike
                </Button>

              </div>
              <div className="mt-10">
              <Icons />
              </div>
          </div>
        </Grid>
        </CarouselItem>

        </CarouselContent>
          <CarouselPrevious className="hidden md:flex text-white bg-tranparent border-0" />
          <CarouselNext className="hidden md:flex text-white bg-tranparent border-0" />
      </Carousel>
      </Container>
    </section>
  )
}
