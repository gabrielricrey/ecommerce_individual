export default function getSbVersion() {
  return process.env.STORYBLOK_IS_PREVIEW === "true" ? "draft" : "published";
}
