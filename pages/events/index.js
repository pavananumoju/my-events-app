import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
// import { getAllEvents, getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllEvents } from "../../helper/api-utils";
import Head from "next/head";

function AllEventsPage(props) {
  const router = useRouter();
  const allEvents = props.allEvents;

  function filteredEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
      </Head>
      <EventsSearch onSearch={filteredEventsHandler} />
      <EventList events={allEvents}></EventList>
    </Fragment>
  );
}

export async function getStaticProps() {
  const fetchedEvents = await getAllEvents();
  return {
    props: { allEvents: fetchedEvents },
    revalidate: 60,
  };
}

export default AllEventsPage;
