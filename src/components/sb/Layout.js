import { getStoryblokApi } from "@/lib/storyblok";
import getSbVersion from "@/utils/getSbVersion";
import Link from "next/link";

export default async function Layout({ children }) {
  const { data } = await fetchData();

  const headerClasses =
    "w-full border-black border-b-1 border-opacity-50 flex justify-center items-center bg-[#EFF2F6] h-[60px]";
  const footerClasses = "w-full";
  const seachInputClasses = "outline-none bg-white";

  return (
    <>
      <header className={headerClasses}>
        <div>
          <Link href={{}}>{data.story.content.header_links[0].name}</Link>
          <Link href={{}}>{data.story.content.header_links[1].name}</Link>
        </div>
        <input type="text" className={seachInputClasses} />
      </header>
      {children}
      <footer className={footerClasses}>Footer</footer>
    </>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/globals/config", {
    version: getSbVersion(),
  });
}
