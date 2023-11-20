/**
 * ProductCategoryRow component which displays a table row dedicated to a category title.
 * Used to group products by category in a table view.
 *
 * @param {string} category - The name of the product category to display.
 */

import { ProductCategoryRowPropTypes } from "../../proptypes";

export default function ProductCategoryRow({ category }) {
    return (
        <tr className="product-category-row">
            <td colSpan={4}>{category}</td>
        </tr>
    );
}

ProductCategoryRow.propTypes = ProductCategoryRowPropTypes;
