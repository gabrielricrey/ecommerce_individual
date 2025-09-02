"use client";

import { usePathname } from "next/navigation";
import Footer from "../Footer";

export default function FooterWrapper({ children, data }) {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/product-detail-page/");

  return (
    <>
      {children}
      {!hideFooter && <Footer data={data} />}
    </>
  );
}
