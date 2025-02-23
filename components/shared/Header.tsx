import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/assets/images/logo.png';
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {

  const { isSignedIn } = useAuth();
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-40"><Image src={Logo}
             alt="Orchestrate Logo" style={{width: '160px',height: 'auto',}}/></Link>

                {isSignedIn ? (
                    <nav className="md:flex-between max-md:hidden w-full max-w-xs">
                        <NavItems />
                    </nav>
                    ) : (<></>)
                }

             <div className="flex w-32 justify-end gap-3">
                 {isSignedIn ? (
                     <>
                         <UserButton/>
                         <MobileNav />
                     </>
                     ) : (<></>)
                 }
                 {!isSignedIn ? (
                     <>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                     </>
                 ) : (<></>)
                 }
             </div>
        </div>
    </header>
  )
}

export default Header;
