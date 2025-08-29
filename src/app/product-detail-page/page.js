import { getStoryblokApi } from "@/lib/storyblok";
import getSbVersion from "@/utils/getSbVersion";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProductDetailPage({}) {
  redirect("/home");
  return <></>;
}
