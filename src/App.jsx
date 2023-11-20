import { useState } from "react";
import SearchBar from "./components/products/SearchBar";
import ProductTable from "./components/products/ProductTable";
import PRODUCTS from "./product";
import "./App.css";

function App() {
    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [search, setSearch] = useState("");
    const visibleProducts = PRODUCTS.filter((product) => {
        if (showStockedOnly && !product.stocked) {
            return false;
        }
        if (search && !product.productName.includes(search)) {
            return false;
        }
        return true;
    });
    return (
        <div className="container my-3">
            <SearchBar
                showStockedOnly={showStockedOnly}
                search={search}
                onSearchChange={setSearch}
                onStockedOnlyChanged={setShowStockedOnly}
            />
            <ProductTable products={visibleProducts} />
        </div>
    );
}

export default App;
