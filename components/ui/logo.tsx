import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/">
        <Image src="/logo/logo_light.svg" alt="logo" width="130" height="40" />
    </Link>
  )
}
