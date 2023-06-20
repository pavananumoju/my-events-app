import EventList from "@/components/events/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";
import { getFeaturedEvents } from "@/helper/api-utils";
import Head from "next/head";

export default function Home(props) {
  const featuredEvents = props.featuredEvents;

  return (
    <div>
      <Head>
        <title>NextJs Events</title>
      </Head>
      <NewsletterRegistration/>
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
