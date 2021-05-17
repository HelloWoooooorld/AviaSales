import './tabs.css';

const Tabs = () => {
    const tabsName = ['Самый Дешевый', 'Самый Быстрый', 'Оптимальный'];

    return (
        <div>
            {tabsName.map(i => <button key={i} className="btn btn__tab">{i}</button>)} 
        </div>
    )
}

export default Tabs;