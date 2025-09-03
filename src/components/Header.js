"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { cn } from "@/utils/cn";
import { useState } from "react";
import SearchSection from "./SearchSection";

export default function Header({ data, darkMode }) {
  const [hovered, setHovered] = useState(false);
  const [subHovered, setSubHovered] = useState(false);

  const headerClasses = cn(
    "w-full border-black border-b-1 border-opacity-50 flex justify-center items-start bg-[#EFF2F6]",
    { "bg-black text-white": darkMode }
  );

  return (
    <header className={headerClasses}>
      <nav className="flex w-[1400px] gap-10 px-5 justify-between py-3 transition-all duration-300">
        <div className="flex-1 flex gap-10">

          <Link href="/" className="font-bold text-lg">
            {data.logo[0].label}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Link href="#" className="block">
              {data.header_links[0].name}
            </Link>

            {hovered && (
              <div className="mt-2 flex flex-col p-2">
                <div
                  className="relative"
                  onMouseEnter={() => setSubHovered(true)}
                  onMouseLeave={() => setSubHovered(false)}
                >
                  <Link href="#">Sweaters</Link>
                  {subHovered && (
                    <div className="mt-2 flex flex-col p-2">
                      <Link href="#">Man</Link>
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="line-through text-gray-400 cursor-not-allowed pointer-events-none"
                      >
                        Woman
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link href="#">{data.header_links[1].name}</Link>
          <SearchSection />
        </div>

        {/* BAG */}
        <ShoppingBagIcon className="size-6 cursor-pointer" />
      </nav>
    </header>
  );
}
