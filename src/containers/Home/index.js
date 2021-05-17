import Filter from './components/filter';
import TicketList from './components/ticketList';
import './home.css';

const Home = () => {
    return (
        <>
        <div className='logo__plane'></div>
        <div className='home'>
            <Filter />
            <TicketList />
        </div>
        </>
    )
}

export default Home;