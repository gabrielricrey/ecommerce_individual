import SearchInput from "./SearchInput"
import SearchResults from "./SearchResults"
import { useState } from "react"

export default function SearchSection() {
    const [products, setProducts] = useState([])
    const [showResults, setShowResults] = useState(false)

    return (
        <div className="flex flex-col w-full md:w-1/2">
            <SearchInput setProducts={setProducts} setShowResults={setShowResults} />
            {showResults &&
                <SearchResults products={products} setProducts={setProducts} setShowResults={setShowResults} />
            }
        </div>
    )
}