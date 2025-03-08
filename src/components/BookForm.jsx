import './BookForm.css'
import { useEventStore } from "../store"
import useEvents from '../hooks/useEvents'

export default function BookForm() {
    const {idEvent} = useEventStore();
    const { fetchBook } = useEvents()

    const handleSubmit = (data) => {
        console.log(data)
    }
    
    return (
        <form className='container-bookform' onSubmit={handleSubmit}>
            <div>
                <label>Customer Name</label>
                <input type="text" />
            </div>

            <div>
                <label>Tickets to book</label>
                <input type="number" />
            </div>

            <p>Total Price:</p>

            <input type="submit" value="Book Now!" />
        </form>
    )
}
