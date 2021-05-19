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
        const date = new Date(dateNum);
        const res = date.toString().slice(16, 21)
        return res;
    }

    const convertDurationToHours = (date) => {
        const duration = convertMinToHours(segments.duration)
        const dateOrigin = convertDate(date)
        const resDurationHours = duration.slice(0, 2)
        const resOriginHours = dateOrigin.slice(0, 2)
        const resDurationMin = duration.slice(4, 7)
        const resOriginMin = dateOrigin.slice(3, 5)

        let hours = +resDurationHours + +resOriginHours
        let min = +resDurationMin + +resOriginMin
        if (min > 60) {
            min -= 60
            hours += 1
        };
        if (hours > 24) {
            hours -= 24
        };
        if (min < 10) min = "0" + min;
        return `${hours}:${min}`
    }

    convertDurationToHours();

    return (
        <>
            <div className='ticket__item-part'>
                <span>{segments.origin}-{segments.destination}</span>
                <span>{convertDate(segments.date)} - {convertDurationToHours((segments.date))}</span>
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