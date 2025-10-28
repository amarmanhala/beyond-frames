"use client"

import { useCart } from "@/store/CartContext";
import { Handbag } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { cartCount } = useCart();
  return (
    <header className="flex justify-between items-center p-6">
      <Link href={"/"}>Beyond Frames</Link>

      <nav className="flex space-x-4">
        <Link href={"/cart"}><div className="flex"><Handbag />&nbsp;{cartCount !== 0 && <span>({cartCount})</span>}</div></Link>
        <Link href={"/acount"}>Account</Link>
      </nav>
    </header>
  );
};

export default Header;
