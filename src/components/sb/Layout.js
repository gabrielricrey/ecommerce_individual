import { getStoryblokApi } from "@/lib/storyblok";
import getSbVersion from "@/utils/getSbVersion";
import Header from "../Header";
import Footer from "../Footer";

export default async function Layout({ children }) {
  const { data } = await fetchData();

  return (
    <>
      <Header data={data.story.content} />

      {children}

      <Footer data={data.story.content} />
    </>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/globals/config", {
    version: getSbVersion(),
  });
}
