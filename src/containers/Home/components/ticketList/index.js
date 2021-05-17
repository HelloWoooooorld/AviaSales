
import './ticketList.css';
import Ticket from '../ticket/index';
import Tabs from '../tabs/index';
import AviaService from '../../../../services/index';




const TicketList = () => {
    const avia = new AviaService();
    console.log(avia.getTicketFromId());
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