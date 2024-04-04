import { HeaderOne } from '@/components/wrappers/header/header-one'
import { HeroOne } from '@/components/wrappers/hero/hero-one'

export default function Layout({ children }: { children?:React.ReactNode }){
  return (
    <>
        <div className='bg-bg_body min-h-screen'>
            <HeaderOne/>
            {children}
        </div>
    </>
  )
}
