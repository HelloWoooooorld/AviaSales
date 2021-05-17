import Filter from './components/filter';
import TicketList from './components/ticketList';
import './home.css';

const Home = () => {
    return (
       <div className='home'>
            <Filter/>
            <TicketList/>
       </div>
    )
}

export default Home;