import Image from "next/image";
import Link from "next/link";
import Logo from '../../public /assets/images/logo.png';
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-40"><Image src={Logo}
             alt="Orchestrate Logo" priority /></Link>
             <div className="flex w-32 justify-end gap-3">
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
