import './DisplayEvents.css'
import useEvents from '../hooks/useEvents'
import DetailEvent from './DetailEvent'
import { useEventStore } from "../store";

export default function DisplayEvents() {
    const {idEvent, verifyIdEvent} = useEventStore();

    const { fetchEvents, results } = useEvents()
    const handleSubmit = (e) => {
        fetchEvents()
        console.log(results)
    }
    console.log(idEvent)

  return (
    <>
    <h2>Upcoming Events</h2>
    <button className='button-displayevents' onClick={handleSubmit}>Verify</button>
    <div className='list-displayevents'>
        {results.map(event=>(   
            <div key={event.id} className='card-displayevents' onClick={()=>verifyIdEvent(event.id)}>
                <img src={`${event.image}`} alt={event.name}/>
                <div className='text-displayevents'>
                    <p>Event: <span>{event.name}</span></p>
                    <p>Date: <span>{event.date.slice(0, 10)}</span></p>
                    <p>Available Seats: <span>{event.price}</span></p>
                </div>
            </div>
        ))}
        {idEvent != 0 ? (
            <DetailEvent />
        ) : (<></>)}
    </div>
    </>
  )
}