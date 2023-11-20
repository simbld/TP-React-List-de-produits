/**
 * `Input` component for text input. 
 * This component wraps a standard HTML input element and allows customization via props for value, value change, and placeholder text.
 * 
 * @param {string} placeholder - Indicative text displayed in the input field when empty.
 * @param {string} value - Current value of the input field.
 * @param {(s: string) => void} onChange - Function called each time the field value changes. 
 *                               - Takes the new field value as a parameter.
 */

import { inputPropTypes, inputDefaultProps } from "../../proptypes";

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

Input.propTypes = inputPropTypes;
Input.defaultProps = inputDefaultProps;