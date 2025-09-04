"use client";

import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSearchStore } from "@/store/useSearchStore";

export default function SearchResults({ products, setShowResults, setProducts }) {

    const { setInput } = useSearchStore()

    return (
        <div className="absolute right-0 top-0 h-dvw w-full md:w-1/4 bg-white p-5">
            <button onClick={() => { setShowResults(false); setInput(""); setProducts([]); }}><XMarkIcon className="size-6 text-black absolute top-4 right-4 cursor-pointer" /></button>
            <div>
                <div className="border-b-1 border-black">
                    <h3 className="text-black text-xl font-bold mb-5">Search result</h3>
                </div>

                <ul className="">

                    {products &&
                        products.map(product =>
                            <li key={product.id} className="border-b-1 mt-5 text-black hover:text-gray-500" onClick={() => { setShowResults(false); setInput(""); setProducts([]); }}>
                                <Link href={`/product-detail-page/${product.id}`}>
                                    {product.name}
                                </Link>
                            </li>
                        )}
                </ul>
            </div>
        </div>

    )
}