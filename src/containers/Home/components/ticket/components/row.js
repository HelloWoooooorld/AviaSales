const Row = ({ segments }) => {

    const convertMinToHours = (time) => {
        let hours = time / 60 ^ 0;
        if (hours) {
            let minutes = time % 60;
            if (minutes < 10) minutes = '0' + minutes
            return time = hours + ' ч ' + minutes + ' м';
        } else {
            return time = time + ' м';
        }
    }


    const convertDate = (dateNum) => {
        let date = new Date(dateNum);
        console.log(date.getUTCHours()); // Hours
        console.log(date.getUTCMinutes());
    }


    return (
        <>
            <div className='ticket__item-part'>
                <span>{segments.origin}-{segments.destination}</span>
                <span>10:45 - 08:00</span>
            </div>
            <div className='ticket__item-part'>
                <span>В ПУТИ</span>
                <span>{convertMinToHours(segments.duration)}</span>
            </div>
            <div className='ticket__item-part'>
                <span>{segments.stops.length} ПЕРЕСАДКИ</span>
                {
                    segments.stops.length === 0 ?
                        <span>Пересадок нету</span> :
                        <span>{segments.stops.map(item => <>{item} </>)}</span>
                }

            </div>
        </>
    )
}

export default Row;