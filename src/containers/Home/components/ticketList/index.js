
import './ticketList.css';
import Ticket from '../ticket/index';
import Tabs from '../tabs/index';
import AviaService from '../../../../services/index';
import { useState } from 'react';

const TicketList = () => {

    const avia = new AviaService();
    const [ticket, setTicket] = useState([]);

    (async () => {
        const meta = await avia.getTicketFromId();
        res(meta.tickets);
    })();

    const res = (data) => setTicket(data);
    
    return (
        <>
            <div className='ticketList'>
                <Tabs />
                <Ticket />
                {
                    ticket.map(item => <Ticket key={item.price} item={item} />)
                }
            </div>
        </>
    )
}

export default TicketList;