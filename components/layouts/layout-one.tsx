import { HeaderOne } from '../wrappers/header/header-one'
import { HeroOne } from '../wrappers/hero/hero-one'

export const LayoutOne = ({ children }: { children?:React.ReactNode }) => {
  return (
    <>
        <div className='bg-bg_body min-h-screen'>
            <HeaderOne/>
            <HeroOne/>
        </div>
        {/* <main className="flex min-h-screen flex-col">
        {children}
        </main> */}
    </>
  )
}
