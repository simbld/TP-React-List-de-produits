import CheckBox from "../forms/CheckBox";

export default function SearchBar() {
    return (
        <div>
            <div className="mb-3">
                <input
                    type="text"
                    value=""
                    onChange={() => null}
                    placeholder="Rechercher.."
                />
                <CheckBox
                    id="stocked"
                    checked={false}
                    onChange={() => null}
                    label="N'afficher que les produits en stock"
                />
            </div>
        </div>
    );
}
