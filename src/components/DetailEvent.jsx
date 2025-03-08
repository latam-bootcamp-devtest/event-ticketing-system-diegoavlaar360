import './DetailEvent.css'
import { useEventStore } from "../store";
import useEvents from '../hooks/useEvents'
import { useEffect, useState } from 'react';
import BookForm from './BookForm';

export default function DetailEvent() {
    const [isBook, setIsBook] = useState(false)
    const { idEvent } = useEventStore();
    const { fetchDetail, resultId } = useEvents()
    useEffect(() => {
        fetchDetail(idEvent)
    }, [idEvent]);
    console.log(resultId)
    return (
        <div className='overlay-detailevent'>
            <div className='modal-detailevent'>
                <img src={`${resultId.image}`} alt={resultId.name} />
                <div className='text-detailevent'>
                    <p>Event: <span>{resultId.name}</span></p>
                    <p>Date: <span>{resultId.date}</span></p>
                    <p>Location: <span>{resultId.location}</span></p>
                    <p>Event Description: <span>{resultId.description}</span></p>
                    <p>Price: <span>{resultId.price}</span></p>
                </div>
                
                {isBook ? (<BookForm/>):(<button onClick={()=>setIsBook(true)}>Book Ticket</button>)}
            </div>
        </div>
    )
}
