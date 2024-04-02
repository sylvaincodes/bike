import Image from "next/image"
import Link from "next/link"

export const Icons = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center">
                      <Link href="#" className="hover:animate-bounce ">
                          <Image src="/icons/facebook.svg" height="40" width="40" alt="facebook page" />
                      </Link><Link href="#" className="hover:animate-bounce ">
                          <Image src="/icons/instagram.svg" height="40" width="40" alt="instagram page" />
                      </Link><Link href="#" className="hover:animate-bounce ">
                          <Image src="/icons/linkedin.svg" height="40" width="40" alt="linkedin page" />
                      </Link><Link href="#" className="hover:animate-bounce ">
                          <Image src="/icons/x.svg" height="40" width="40" alt="twitter page" />
                      </Link>
                  </div>
  )
}
