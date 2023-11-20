/**
 * ProductRow component to display product information in a table row.
 * It highlights product not in stock by displaying them in red.
 * 
 * @param {string} productName - The name of the product
 * @param {string} price - Indicates whether the products is in stock.
 * @param {bool} stocked - The price of the product.
 * @param {string} origin - The origin of the product.
 * @param {string} category - The product category.
 */

import { productRowPropTypes } from "../../proptypes";

export default function ProductRow({ product }) {
    const style = product.stocked ? undefined : { color: "red" };
    return (
        <tr>
            <td style={style}>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.origin}</td>
            <td>{product.category}</td>
        </tr>
    );
}

ProductRow.propTypes = productRowPropTypes;
