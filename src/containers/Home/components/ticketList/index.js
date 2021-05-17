
import './ticketList.css';
import Ticket from '../ticket/index';
import Tabs from '../tabs/index';

const TicketList = () => {
    return (
        <>
            <div className='ticketList'>
                <Tabs />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
        </>
    )
}

export default TicketList;