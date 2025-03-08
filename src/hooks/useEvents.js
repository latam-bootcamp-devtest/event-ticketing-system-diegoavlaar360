import axios from "axios"
import { useState } from "react";

export default function useEvents() {
    const [results, setResults] = useState([]);
    const [resultId, setResultId] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://goldfish-app-fbulw.ondigitalocean.app/Event?applicationId=6432a3df-02f5-4330-8bd8-9bc8e258b89e');
            console.log(response)
            setResults(response.data)
            console.log(results)
        } catch (error) {
            console.error("Error fetching the events.", error);
            return null;
        }
    }

    const fetchDetail = async (id) => {
        try {
            const response = await axios.get(`https://goldfish-app-fbulw.ondigitalocean.app/Event/${id}?applicationId=6432a3df-02f5-4330-8bd8-9bc8e258b89e`);
            console.log(response)
            setResultId(response.data)
            console.log(results)
        } catch (error) {
            console.error("Error fetching the detail of the event.", error);
            return null;
        }
    }

    const fetchBook = async () => {
        try {
            const newBook = {
                "applicationId": "6432a3df-02f5-4330-8bd8-9bc8e258b89e",
                "userId": "d84f4401-9f9a-4481-a56b-a738d91f4e12",
                "eventId": "",
                "ticketQuantity": 0,
                "customerName": "string"
              };

        } catch (error) {
            console.error("Error fetching the detail of the event.", error);
            return null;
        }
    }


    return {
        fetchEvents,
        results,
        fetchDetail,
        resultId
    };
}