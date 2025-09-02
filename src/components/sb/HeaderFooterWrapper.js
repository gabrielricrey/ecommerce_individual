"use client";

import { usePathname } from "next/navigation";
import Footer from "../Footer";
import Header from "../Header";

export default function HeaderFooterWrapper({ children, data }) {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/product-detail-page/");
  const darkStyleHeader = pathname.startsWith("/product-detail-page/");

  return (
    <>
      <Header darkMode={darkStyleHeader} data={data} />
      {children}
      {!hideFooter && <Footer data={data} />}
    </>
  );
}
