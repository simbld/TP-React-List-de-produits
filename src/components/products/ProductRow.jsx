/**
 * @param {{productName: string, stocked: boolean, price: string, category: string}} product
 */

import PropTypes from "prop-types";

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

ProductRow.propTypes = {
    product: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};
