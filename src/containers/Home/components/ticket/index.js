
import './ticket.css';

const Ticket = ({item}) => {
    return (
        <div className='wrapper'>
            <div className='ticket'>
                <div className='ticket__head'>
                    <h2>11 200</h2>
                    <div className='ticket__logo'></div>
                </div>
                <div className='ticket__list'>
                    <div className='ticket__item--from'>
                        <div className='ticket__item-part'>
                            <span>MOV-HKT</span>
                            <span>10:45 - 08:00</span>
                        </div>
                        <div className='ticket__item-part'>
                            <span>В ПУТИ</span>
                            <span>21ч 15м</span>
                        </div>
                        <div className='ticket__item-part'>
                            <span>2 ПЕРЕСАДКИ</span>
                            <span>HKG, JNB</span>
                        </div>
                    </div>
                    <div className='ticket__item--to'>
                        <p className='ticket__item-part'>
                            <span>MOV-HKT</span>
                            <span>11:15 - 04:20</span>
                        </p>
                        <p className='ticket__item-part'>
                            <span>В ПУТИ</span>
                            <span>21ч 15м</span>
                        </p>
                        <p className='ticket__item-part'>
                            <span>1 ПЕРЕСАДКИ</span>
                            <span>HKG</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;