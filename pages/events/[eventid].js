import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import EventItem from "@/components/events/event-item";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailsPage() {
  
    const router = useRouter();
    console.log(router.query.eventid);

    const event = getEventById(router.query.eventid);

    if(!event){
        return <p>No event with Id {router.query.eventid} found</p>
    }
  
    return (
    <Fragment>
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </Fragment>
  );
}

export default EventDetailsPage;
