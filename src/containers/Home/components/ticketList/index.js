
import './ticketList.css';
import Ticket from '../ticket/index';
import Tabs from '../tabs/index';
import AviaService from '../../../../services/index';
import { useState, useEffect } from 'react';

const TicketList = () => {

    const avia = new AviaService();

    // (async () => {
    //     const meta = await avia.getTicketFromId();
    //     res(meta.tickets);
    //     // console.log(meta.tickets) // {"metadata": "for: test.png"}
    // })();

    // const res = (data) => data.map(item => <Ticket key={item.price} item={item} />)

    return (
        <>
            <div className='ticketList'>
                <Tabs />
                <Ticket />
                <Ticket />
                <Ticket />
                {/* {res} */}
            </div>
        </>
    )
}

export default TicketList;