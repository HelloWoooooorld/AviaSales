import './tabs.css';

const Tabs = () => {
    const tabsName = ['Самый Дешевый', 'Самый Быстрый', 'Оптимальный'];

    return (
        <div className='tab__container'>
            {tabsName.map(i => <button key={i} className="btn">{i}</button>)} 
        </div>
    )
}

export default Tabs;