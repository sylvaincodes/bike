import { Container } from '@/components/ui/container'
import { Grid } from '@/components/ui/grid'
import React from 'react'
import {Loader} from 'next-animation'
import { mergeOpenGraph } from '@/lib/mergeOpenGraph'
import { Metadata } from 'next'

export default function Page() {
  return (

    <section className='mt-20'>
     <Container>

          <Loader className='w-full'>
            
            <Grid className="grid-cols-1 lg:grid-cols-3 gap-x-16 mt-8 lg:mt-0">
                
                <div className='col-span-2'>
                  <div className='flex flex-col gap-4'>
                    <div className='bg-slate-200 w-full h-80 rounded-lg'></div>
                    <div className='bg-slate-200 w-full h-40'></div>
                  </div>
                </div>
                
                <div className='col-span-1 self-center'>
                  <div className='flex flex-col gap-4'>
                    <div className='w-12 h-12 bg-slate-200 rounded-full'></div>
                    <div className='h-4 bg-slate-200 rounded'></div>
                    <div className='h-12 bg-slate-200 rounded'></div>
                    <div className='h-40 bg-slate-200 rounded'></div>
                  </div>
                </div>

            </Grid>

          </Loader>
    
      </Container> 
    </section>
  )
}


export const metadata: Metadata = {
  title: 'Loading page',
  description: 'A loading simple component with Loader',
  openGraph: mergeOpenGraph({
    title: 'Loading page',
    url: '/',
  }),
}