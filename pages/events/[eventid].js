import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import ErrorAlert from "@/components/ui/error-alert/error-alert";
import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailsPage() {
  
    const router = useRouter();

    const eventData = getEventById(router.query.eventid);
    console.log(eventData);

    if(!eventData){
        return (<ErrorAlert><p>No event with Id {router.query.eventid} found</p></ErrorAlert>);
    }
  
    return (
    <Fragment>
        <EventSummary title={eventData.title}/>
        <EventLogistics date={eventData.date} address={eventData.location} image={eventData.image} imageAlt={eventData.title}/>
        <EventContent>
            <p>{eventData.description}</p>
        </EventContent>
    </Fragment>
  );
}

export default EventDetailsPage;
