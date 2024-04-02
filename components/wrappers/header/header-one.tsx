import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { MainNav } from '@/components/ui/main-nav'
import { MobileMenu } from '@/components/ui/mobile-menu'
import { Row } from '@/components/ui/row'

export const HeaderOne = () => {
  return (
    <header className='h-[61px] pt-[35px]'>
      <Container>
          <Row className='justify-between'>
            <div >
              <Logo/>
            </div>
            <div className='hidden lg:block'>
              <MainNav className='flex-row text-white items-center' />
            </div>
            <div className='flex lg:hidden'>
              <MobileMenu/>
            </div>
          </Row>
      </Container>
    </header>
  )
}
