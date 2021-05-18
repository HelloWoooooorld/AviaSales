
import './ticket.css';
import Row from './components/row';

const Ticket = () => {
    return (
        <div className='wrapper'>
            <div className='ticket'>
                <div className='ticket__head'>
                    <h2>13 400</h2>
                    <div className='ticket__logo'></div>
                </div>
                <div className='ticket__list'>
                    <div className='ticket__item--from'>
                        <Row />
                    </div>
                    <div className='ticket__item--to'>
                        <Row />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;