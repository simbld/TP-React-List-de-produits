import { searchBarPropTypes } from "../../proptypes";
import CheckBox from "../forms/CheckBox";

export default function SearchBar({
    showStockedOnly,
    onStockedOnlyChanged,
    search,
    onSearchChange,
}) {
    return (
        <div>
            <div className="mb-3">
                <input
                    type="text"
                    value={search}
                    onChange={onSearchChange}
                    placeholder="Rechercher..."
                />
                <input type="range" className="form-range" min={0} max={10} />
                <CheckBox
                    id="stocked"
                    checked={showStockedOnly}
                    onChange={onStockedOnlyChanged}
                    label="N'afficher que les produits en stock"
                />
            </div>
        </div>
    );
}

SearchBar.propTypes = searchBarPropTypes;
