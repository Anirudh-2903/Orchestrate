"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/assets/images/logo.png';
import {SignedIn, SignedOut, useAuth, UserButton} from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const Header = () => {
    const { isSignedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn === false) {
            router.refresh(); // Refresh the page when user signs out
        }
    }, [isSignedIn, router]);

    return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-40"><Image src={Logo}
             alt="Orchestrate Logo" style={{width: '160px',height: 'auto',}}/></Link>

            <SignedIn>
              <nav className="md:flex-between max-md:hidden w-full max-w-xs">
                <NavItems />
              </nav>
            </SignedIn>


             <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                  <UserButton/>
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
