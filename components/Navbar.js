import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/Logo.png" width={90} height={90} alt="Logo"/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja List</Link>
        </nav>
     );
}
 
export default Navbar;