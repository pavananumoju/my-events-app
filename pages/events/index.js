import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents, getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AllEventsPage() {
const router = useRouter();
const allEvents = getAllEvents();

function filteredEventsHandler (year, month) {
  const fullPath = `/events/${year}/${month}`;
  router.push(fullPath);
}


  return (
    <Fragment>
      <EventsSearch onSearch={filteredEventsHandler}/>
        <EventList events={allEvents}></EventList>
    </Fragment>
  );
}

export default AllEventsPage;
