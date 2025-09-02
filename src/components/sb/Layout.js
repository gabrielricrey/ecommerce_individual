import { getStoryblokApi } from "@/lib/storyblok";
import getSbVersion from "@/utils/getSbVersion";
import Header from "../Header";
import FooterWrapper from "./FooterWrapper";

export default async function Layout({ children }) {
  const { data } = await fetchData();

  return (
    <>
      <Header data={data.story.content} />
      <FooterWrapper data={data.story.content}>{children}</FooterWrapper>
    </>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/globals/config", {
    version: getSbVersion(),
  });
}
