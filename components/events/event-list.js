import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { events } = props;

  return (
    <div>
      <ul className={classes.list}>
        {events.map((event) => (
          <EventItem eventItem={event} key={event.id} />
        ))}
      </ul>
    </div>
  );
}

export default EventList;
