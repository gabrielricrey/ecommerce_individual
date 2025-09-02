import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default async function ProductDetailPage({ params }) {
  let { id } = await params;
  id = Number(id);

  const { data: product, error } = await supabase
    .rpc("get_product_detail", { p_id: id })
    .single();

  if (error || !product) {
    return <h1>Product not found</h1>;
  }

  return (
    <section className="h-[100vh] flex flex-col md:flex-row w-full bg-[#EFF2F6]">
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
              {product.colors.map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-1 cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p>Size</p>
            <div className="flex"></div>
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
