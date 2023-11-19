/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 */

import PropTypes from "prop-types";

export default function Input({ value, onChange, placeholder }) {
    return (
        <div>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
Input.defaultProps = {
    placeholder: "",
};