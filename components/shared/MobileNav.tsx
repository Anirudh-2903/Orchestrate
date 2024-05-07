import React from 'react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import Image from 'next/image';
import menu from '../../public/assets/icons/menu.svg';
import logo from '../../public/assets/images/logo.png';
import NavItems from './NavItems';


const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image src={menu}
                    className="cursor-pointer" alt="menu" sizes="100vw" style={{width: '100%',height: 'auto', }}/>
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                    <Image src={logo}  alt='logo' />
                    <Separator className="border border-gray-50"/>
                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav;
