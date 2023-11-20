import { productRowPropTypes } from "../../proptypes";

export default function ProductCategoryRow({ category }) {
    return (
        <tr className="product-category-row">
            <td colSpan={4}>{category}</td>
        </tr>
    );
}

ProductCategoryRow.propTypes = productRowPropTypes;
