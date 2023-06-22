import { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "@/store/notification-context";

function NewsletterRegistration() {
  const emailInput = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    const registeredEmail = emailInput.current.value;

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering newsletter",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: registeredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "something went wrong");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Signing Success...",
          message: "newsletter registered",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "signup error",
          message: error.message || "error during signup",
          status: "error",
        });
      });
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInput}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
