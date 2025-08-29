export default function getSbVersion() {
  return process.env.NODE_ENV !== "production" ? "draft" : "published";
}
