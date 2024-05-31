"use client";

import Link from "next/link";
import React from "react";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { IoIosConstruct } from "react-icons/io";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Estimate", href: "/estimate" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoIosConstruct className="w-8 h-8" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "text-zinc-500 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
