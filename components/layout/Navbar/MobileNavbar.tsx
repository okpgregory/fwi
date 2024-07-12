"use client";

import { useRef, useState } from "react";
import MobileNavbarMenuButton from "./MobileNavbarMenuButton";
import NavItems from "./NavItems";
import { useOnClickOutside } from "usehooks-ts";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <div ref={menuRef} className="">
      <MobileNavbarMenuButton
        toggleMenu={() => setIsMenuOpen((pv) => !pv)}
        isMenuOpen={isMenuOpen}
      />
      {isMenuOpen && (
        <div className="absolute bg-background shadow-2xl h-[35vh] right-0 w-full py-8">
          <NavItems mode="mobile" closeMenu={() => setIsMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}
