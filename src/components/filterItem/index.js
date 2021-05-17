import './filterItem.css';

const FilterItem = ({ name }) => {
return (
        <>
            <label className="check">
                <input className="check__input visually-hidden" type="checkbox"/>
                <span className="check__text">{name}</span>
            </label>
        </>
    )
}


export default FilterItem;