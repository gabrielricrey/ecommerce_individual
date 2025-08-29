import { getStoryblokApi } from "@/lib/storyblok";
import getSbVersion from "@/utils/getSbVersion";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  console.log(id);

  const { data: product, error } = await supabase
    .from("product")
    .select()
    .eq("id", id)
    .single();

  if (error || !product) {
    return <h1>Product not found</h1>;
  }

  console.log(product);

  return (
    <section className="h-[100vh] flex flex-col md:flex-row w-full">
      <div className="flex-1 flex items-center justify-center">
        <Image src={product.image_url} alt={{}} width={400} height={400} />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div>
          <h2 className="text-3xl mb-2">{product.name}</h2>
          <p className="mb-2">€{product.price}</p>
          <p className="mb-2">{product.description}</p>
          <div className="mb-2">
            <p>Color</p>
            <div className="flex">
              {product.color.map((color, i) => (
                <div
                  key={i}
                  className="border-1 rounded-full w-10 h-10"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p>Size</p>
            <div className="flex">
              {product.size.map((size, i) => (
                <div
                  key={i}
                  className="border-1 rounded-md w-10 h-10 flex justify-center items-center"
                >
                  <p>{size.toUpperCase()}</p>
                </div>
              ))}
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
