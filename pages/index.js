import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helper/api-utils";

export default function Home(props) {
  const featuredEvents = props.featuredEvents;

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEventsData = await getFeaturedEvents();
  return {
    props: { featuredEvents: featuredEventsData },
    revalidate: 600
  };
}
