import { Handbag } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <Link href={"/"}>Beyond Frames</Link>

      <nav className="flex space-x-4">
        <Link href={"/cart"}><Handbag /></Link>
        <Link href={"/acount"}>Account</Link>
      </nav>
    </header>
  );
};

export default Header;
