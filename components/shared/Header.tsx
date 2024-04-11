import Image from "next/image";
import Link from "next/link";
import Logo from '../../public /assets/images/logo.png';

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36"><Image src={Logo} 
             alt="Orchestrate Logo" priority /></Link>
        </div>
    </header>
  )
}

export default Header;
