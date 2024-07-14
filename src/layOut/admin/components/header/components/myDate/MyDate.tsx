import { useEffect, useState } from 'react';
import { dateInfo } from './dateInfo/dateInfo';

export default function MyDate() {

    const date = new Date();
    const [day, setDay] = useState<string>(dateInfo.days[date.getDay()])
    const [month, setMonth] = useState<string>(dateInfo.months[date.getMonth()])
    const [dayNum, setDayNum] = useState<number>(date.getDay())


    // side effect
    useEffect(() => {
        setInterval(() => {
            setDay(prev => {
                prev = dateInfo.days[date.getDay()]
                return prev
            })

            setMonth(prev => {
                prev = dateInfo.months[date.getMonth()]
                return prev
            })

            setDayNum(prev => {
                prev = date.getDay()
                return prev
            })
        }, 1000)
    }, [])

    return (
        <div>
            {day}, {month} {dayNum}
        </div>
    )
}
