import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/assets/images/logo.png';


const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src={Logo} alt="logo" style={{width: '160px',height: 'auto',}}/>
        </Link>
        <p>2024 Orchestrate. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
