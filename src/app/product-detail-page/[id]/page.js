import { getStoryblokApi } from "@/lib/storyblok";
import getSbVersion from "@/utils/getSbVersion";
import Image from "next/image";

export default async function ProductDetailPage({ params }) {
  const { id } = params;

  return (
    <section className="h-[100vh] flex w-full">
      <div className="flex-1">
        <Image src={{}} alt={{}} width={{}} height={{}} />
      </div>
      <div className="flex-1 flex items-center">
        <div>
          <h2 className="text-3xl mb-2">Mens Winter Jacket</h2>
          <p className="mb-2">€99</p>
          <p className="mb-2">
            Revamp your style with the latest designer trends in men’s clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.{" "}
          </p>
          <div className="mb-2">
            <p>Color</p>
            <div className="flex">
              <div className="border-1 rounded-full w-10 h-10"></div>
              <div className="border-1 rounded-full w-10 h-10"></div>
            </div>
          </div>
          <div className="mb-2">
            <p>Size</p>
            <div className="flex">
              <div className="border-1 rounded-md w-10 h-10"></div>
              <div className="border-1 rounded-md w-10 h-10"></div>
              <div className="border-1 rounded-md w-10 h-10"></div>
            </div>
          </div>
          <div>
            <a>Size & fit guide</a>
            <p>Height of model: </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function fetchData() {}
