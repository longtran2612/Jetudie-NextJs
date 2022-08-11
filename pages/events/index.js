import { useRouter } from 'next/router'
import { useState } from 'react'


export default function Events({ events }) {
    const router = useRouter()
    const [selectedEvent, setSelectedEvent] = useState(events)
    const fetchSport = async () => {
        const res = await fetch(`http://localhost:4000/events?category=ngu`)
        const data = await res.json()
        setSelectedEvent(data)
        router.push('/events?category=ngu',undefined,{ shallow: true })
        

    }
    return (
        <>
            <button onClick={fetchSport}>Sprot event</button>
            <h1>event list</h1>
            {
                selectedEvent.map((event) => {
                    return (<div key={event.id}>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                        <p>{event.category}</p>
                    </div>
                    )
                })
            }

        </>
    )
}

export async function getServerSideProps(context) {
    const query = context.query
    const category = query.category
    const queryString = category ? `category=ngu` : ''
    const res = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await res.json()

    return {
        props: {
            events: data
        }
    }
}