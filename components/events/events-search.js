import Button from "../ui/button";
import classes from "./events-search.module.css";
import { useRef } from "react";

function EventsSearch (props) {

    const yearInputRef = useRef();
    const monthInputRef = useRef();

    function submitFormHandler (event){
    event.preventDefault();
    

    const year = yearInputRef.current.value;
    const month = monthInputRef.current.value;

    props.onSearch(year, month);

}

    return <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor="year">Year</label>
                <select id="year" ref={yearInputRef}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="month">Month</label>
                <select id="month" ref={monthInputRef}>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
        </div>
        <Button>Submit</Button>
    </form>
}

export default EventsSearch;