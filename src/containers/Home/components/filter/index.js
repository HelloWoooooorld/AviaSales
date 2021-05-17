
import './filter.css';
import FilterItem from '../../../../components/filterItem';

const filterNames = ['Все', 'Без пересадок', '1 Пересадка', '2 Пересадка', '3 Пересадка'];

const Filter = () => {
    return (
       <div className='wrapper'>
           <div className='filter'>
            <h1 className='filter__title'>Количество Пересадок</h1>
            <div className='filter__list'>
                {filterNames.map(name => (
                    <FilterItem key={name} name={name}/>
                ))}
            </div>
       </div>
       </div>
    )
}

export default Filter;