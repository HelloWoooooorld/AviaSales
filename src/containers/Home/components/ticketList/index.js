
import './ticketList.css';
import Ticket from '../ticket/index';
import Tabs from '../tabs/index';
import AviaService from '../../../../services/index';
import { useState, useEffect } from 'react';

const TicketList = () => {

    const avia = new AviaService();
    const [ticket, setTicket] = useState([]);
    const [listItem, setListItem] = useState(5)

    const getObj = async () => {
        const meta = await avia.getTicketFromId();
        return setTicket(meta.tickets);
    }

    const addTicketItems = () => {
        setListItem(prev => prev += 5)
    }

    useEffect(() => {
        getObj();
    }, [])

    return (
        <>
            <div className='ticketList'>
                <Tabs />
                {
                    ticket.length && ticket.slice(0, listItem).map(item => <Ticket key={item.price} item={item} />)
                }
                <button className='btn_more' onClick={addTicketItems}>Показать еще 5 билетов</button>
            </div>
        </>
    )
}

export default TicketList;