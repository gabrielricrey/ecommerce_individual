import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export default function Header({ data }) {
  const headerClasses =
    "w-full border-black border-b-1 border-opacity-50 flex justify-center items-center bg-[#EFF2F6] h-[60px]";
  const seachInputClasses = "outline-none";
  return (
    <header className={headerClasses}>
      <nav className="flex w-[1400px] gap-10 px-5 items-center justify-between">
        <div className="flex-1 flex gap-10 items-center">
          <Link
            href={`/${data.logo[0].cached_url}`}
            className="font-bold text-lg"
          >
            {data.logo[0].label}
          </Link>
          <Link href={{}}>{data.header_links[0].name}</Link>
          <Link href={{}}>{data.header_links[1].name}</Link>
          <div className="flex-1 flex gap-3 justify-start">
            <MagnifyingGlassIcon className="size-6" />
            <input
              type="text"
              className={seachInputClasses}
              placeholder="Search"
            />
          </div>
        </div>
        <ShoppingBagIcon className="size-6 cursor-pointer" />
      </nav>
    </header>
  );
}
