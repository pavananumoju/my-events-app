import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById, getFeaturedEvents } from "@/helper/api-utils";
import ErrorAlert from "@/components/ui/error-alert/error-alert";
import { Fragment } from "react";

function EventDetailsPage(props) {
  const eventData = props.event;

  if (!eventData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={eventData.title} />
      <EventLogistics
        date={eventData.date}
        address={eventData.location}
        image={eventData.image}
        imageAlt={eventData.title}
      />
      <EventContent>
        <p>{eventData.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const fetchedEvent = await getEventById(context.params.eventid);
  return {
    props: { event: fetchedEvent },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();

  return {
    paths: allEvents.map((eventData) => ({
      params: { eventid: eventData.id },
    })),
    fallback: "blocking",
  };
}

export default EventDetailsPage;
