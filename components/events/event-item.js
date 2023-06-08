import Link from "next/link";
import classes from "./event-item.module.css";

function EventItem(props) {
  const formattedDate = new Date(props.eventItem.date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const formattedAddress = props.eventItem.location.replace(", ", "\n");

  const exploreLink = `/events/${props.eventItem.id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + props.eventItem.image} alt={props.eventItem.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{props.eventItem.title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
