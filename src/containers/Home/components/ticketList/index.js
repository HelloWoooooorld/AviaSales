
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
        return res(meta.tickets);
    }

    const addTicketItems = () => {
        setListItem(prev => prev += 5)
    }

    useEffect(() => {
        getObj();
    }, [])



    const res = (data) => setTicket(data);

    const getValueFromToolBar = (e) => {
        switch (e.target.id) {
            case '0': {
                return setTicket(prev => prev.sort((a, b) => a.price - b.price))
            }
            case '1': {
                return setTicket(prev => prev.sort((a, b) => a.duration - b.duration))
            }
            case '2': {
                let filteredPrice = ticket.sort((a, b) => a.price - b.price)
                console.log(filteredPrice)

                filteredPrice = filteredPrice.forEach((item, i) => item.priceIdx = i)
                filteredPrice = filteredPrice.forEach((item, i) => item.durationIdx = i)
                console.log(filteredPrice)

                // filteredArray = filteredArray.map((item) => item.result = (item.priceIdx + item.durationIdx) / 2)
                // console.log(filteredArray)

                // filteredArray.sort((a, b) => a.result - b.result);
                // console.log(filteredArray)


            }
        }
    }


    return (
        <>
            <div className='ticketList'>
                <Tabs getValueFromToolBar={getValueFromToolBar} />

                {console.log(ticket.slice(0, 5))}
                {
                    ticket.length && ticket.slice(0, listItem).map(item => <Ticket key={item.price} item={item} />)
                }
                <button className='btn_more' onClick={addTicketItems}>Показать еще 5 билетов</button>
            </div>
        </>
    )
}

export default TicketList;