"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface INavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navLinks: INavItem[];
}

const Navbar: FC<NavbarProps> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(({ label, href }, i) => (
        <Link
          href={href}
          key={`${label}${i}`}
          className={pathname === href ? "active" : ""}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
