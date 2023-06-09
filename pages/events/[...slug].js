import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "@/components/events/results-title/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert/error-alert";

function FilteredEventsPage() {
  const router = useRouter();
  // const [year, month] = router.query;
  // console.log(router.query.slug);
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
    <Fragment>
      <ErrorAlert><p>Invalid filter, please adjust your data</p></ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>);
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert><p>No events found for the chosen filter</p></ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents}></EventList>
    </Fragment>
  );
}

export default FilteredEventsPage;
