import { getStoryblokApi } from "@/lib/storyblok";
import getSbVersion from "@/utils/getSbVersion";
import HeaderFooterWrapper from "./HeaderFooterWrapper";

export default async function Layout({ children }) {
  const { data } = await fetchData();

  return (
    <>
      <HeaderFooterWrapper data={data.story.content}>
        {children}
      </HeaderFooterWrapper>
    </>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/globals/config", {
    version: getSbVersion(),
  });
}
