import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/assets/images/logo.png';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-40"><Image src={Logo}
             alt="Orchestrate Logo" priority style={{width: '160px',height: 'auto',}}/></Link>

            <SignedIn>
              <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItems />
              </nav>
            </SignedIn>


             <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                  <UserButton afterSignOutUrl="/" afterMultiSessionSingleSignOutUrl="/" />
                  <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full" size="lg">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
             </div>
        </div>
    </header>
  )
}

export default Header;
