
import './ticketList.css';
import Ticket from '../ticket/index';
import Tabs from '../tabs/index';
import AviaService from '../../../../services/index';
import { useState, useEffect } from 'react';

const TicketList = () => {

    const avia = new AviaService();
    const [ticket, setTicket] = useState([]);

    const getObj = async () => {
        const meta = await avia.getTicketFromId();
        return res(meta.tickets);
    }

    useEffect(() => {
        getObj();
    }, [])

    const res = (data) => setTicket(data);

    return (
        <>
            <div className='ticketList'>
                <Tabs />
                {
                    ticket.length && ticket.map(item => <Ticket key={item.price} item={item} />)
                }
            </div>
        </>
    )
}

export default TicketList;