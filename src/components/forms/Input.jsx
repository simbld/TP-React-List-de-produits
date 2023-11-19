/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 */

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
