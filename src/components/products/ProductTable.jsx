import { productTablePropTypes } from "../../proptypes";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
    const rows = products.reduce((accRows, product, index) => {
        if (index === 0 || product.category !== products[index - 1].category) {
            accRows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={`category-${product.category}`}
                />,
            );
        }

        accRows.push(
            <ProductRow product={product} key={product.productName} />,
        );
        return accRows;
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Catégorie</th>
                    <th>Produit</th>
                    <th>Origine</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

ProductTable.propTypes = productTablePropTypes;
