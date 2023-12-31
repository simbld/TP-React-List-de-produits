import PropTypes from "prop-types";

export const checkBoxPropTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export const inputPropTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export const productRowPropTypes = {
    product: PropTypes.shape.isRequired,
    stocked: PropTypes.bool.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export const ProductCategoryRowPropTypes = {
    category: PropTypes.string.isRequired,
};

export const productTablePropTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            stocked: PropTypes.bool.isRequired,
            productName: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            origin: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export const searchBarPropTypes = {
    showStockedOnly: PropTypes.bool.isRequired,
    onStockedOnlyChanged: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};

export const inputDefaultProps = {
    placeholder: "",
};
