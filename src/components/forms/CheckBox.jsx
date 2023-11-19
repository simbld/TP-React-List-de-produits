/**
 *
 * @param {boolean} checked
 * @param {(v: boolean) => void} onChange
 * @param {string} label
 * @param {string} id
 */

import PropTypes from "prop-types";

export default function CheckBox({ checked, onChange, label, id }) {
    return (
        <div className="form-check">
            <input
                id={id}
                type="checkbox"
                className="form-check-input"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor={id} className="form-check-label">
                {label}
            </label>
        </div>
    );
}

CheckBox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
