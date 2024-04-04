import { HeaderTwo } from '@/components/wrappers/header/header-two'

export default function Layout({ children }: { children?:React.ReactNode }){
  return (
    <>
        <div className='bg-bg_body '>
            {/* <HeaderTwo/> */}
        </div>
        <main className="">
            {children}
        </main>
    </>
  )
}
