import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

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
      <Image src={"/" + props.eventItem.image} alt={props.eventItem.title} width={250} height={160}/>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{props.eventItem.id}-{props.eventItem.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
