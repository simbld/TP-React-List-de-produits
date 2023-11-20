/**
 *Represents a customizable check box.
 *
 * @param {boolean} checked - Indicates whether the check box is checked.
 * @param {(b: boolean) => void} onChange - Function called when the check box sate changes.
 *                        - Takes the new value of the box (true/false) as a parameter.
 * @param {string} label - Text of the label associed with the check box.
 * @param {string} id - Unique identifier for the check box, used for association with the label.
 */

import { checkBoxPropTypes } from "../../proptypes";

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

CheckBox.propTypes = checkBoxPropTypes;