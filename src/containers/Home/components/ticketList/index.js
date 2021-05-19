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

    const getValueFromToolBar = (e) => {
        let result;
        switch (e.target.id) {
            case '0': {
                result = ticket.sort((a, b) => a.price - b.price)
                break;
            }
            case '1': {
                result = ticket.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
                break;
            }
            case '2': {
                const filteredPrice = ticket.sort((a, b) => a.price - b.price)
                const addIndexToFilteredPrice = ticket.map((item, i) => item.priceIdx = i)
                // add price ID
                const filteredDuration = ticket.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
                const addIndexToFilteredDuration = filteredDuration.map((item, i) => item.durrIdx = i)
                // add duration ID
                const addResIndex = ticket.map((item) => item.res = item.priceIdx + item.durrIdx)
                const filteredFromResIndex = ticket.sort((a, b) => a.res - b.res);
                // sum result price and durr
                result = filteredFromResIndex
                break;
            }
            default: {
                return result
            }
        }
        setTicket([...result])
    }

    return (
        <>
            <div className='ticketList'>
                <Tabs getValueFromToolBar={getValueFromToolBar} />
                {
                    ticket.length && ticket.slice(0, listItem).map(item => <Ticket key={item.price} item={item} />)
                }
                <button className='btn_more' onClick={addTicketItems}>Показать еще 5 билетов</button>
            </div>
        </>
    )
}

export default TicketList;