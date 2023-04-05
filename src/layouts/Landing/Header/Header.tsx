import { LandingLayoutHeaderProps } from "@/Types/Interface/ComponentProps/LayoutsProps";
import Image from "next/image";
import Link from "next/link";

const Header = ({ logoSrc, navConfig }: LandingLayoutHeaderProps) => {
  return (
    <header className="bg-white shadow">
      <nav className="container px-4 py-4 mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={logoSrc} alt="Logo" width={50} height={50} />
          <span className="ml-2 text-xl font-bold">RestRose Valley</span>
        </Link>
        <ul className="flex items-center">
          {navConfig.map((navOp) => (
            <li key={navOp.label} className="ml-4">
              <Link href={navOp.link} className="text-gray-600 hover:text-black font-medium">
                {navOp.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
