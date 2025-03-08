import './DetailEvent.css'
import { useEventStore } from "../store";
import useEvents from '../hooks/useEvents'
import { useEffect } from 'react';

export default function DetailEvent() {
    const {idEvent} = useEventStore();
    const { fetchDetail, resultId } = useEvents()
    useEffect(() => {
        fetchDetail(idEvent)
      }, idEvent);
    console.log(resultId)
  return (
    <div>{idEvent}</div>
  )
}
