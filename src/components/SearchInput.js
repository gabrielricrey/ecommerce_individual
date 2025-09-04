"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import { supabase } from "@/lib/supabaseClient";
import { useSearchStore } from "@/store/useSearchStore";

export default function SearchInput({ setProducts, setShowResults }) {
  const { input, setInput } = useSearchStore();

  const getProducts = useCallback(async (input) => {

    console.log(input);
    if (!input) {
      setProducts([]);
      return;
    }

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .ilike("name", `%${input}%`)

    if (error) {
      console.error(error)
      return []
    }

    setProducts(data)

  })

  const debouncedSearch = useCallback(
    debounce(getProducts, 300),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    }
  }, [debouncedSearch])

  return (
    <div className="flex-1 flex gap-3 justify-start" onClick={() => setShowResults(true)}>
      <MagnifyingGlassIcon className="size-6" />
      <input
        type="text"
        value={input}
        onChange={(e) => { setInput(e.target.value); debouncedSearch(e.target.value) }}
        className="outline-none"
        placeholder="Search"
      />
    </div>
  );
}
