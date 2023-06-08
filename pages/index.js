import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

const featuredEvents = getAllEvents();

  return (
    <div>
      <h1>Featured Events Page</h1>
      <EventList events={featuredEvents}/>
    </div>
  );
}
