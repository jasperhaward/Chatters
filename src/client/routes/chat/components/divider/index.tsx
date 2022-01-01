import * as utils from "../../utils";
import styles from "./styles.scss";

interface DividerProps {
    date: string;
}

function Divider({ date }: DividerProps) {
    function getTimeStamp(string: string) {
        var date = new Date(string);
        var options: Intl.DateTimeFormatOptions;
        
        if (utils.isToday(date)) {
            return "Today";
        } else if (utils.isYesterday(date)) {
            return "Yesterday";
        } else if (utils.isThisWeek(date)) {
            options = {
                weekday: "long",
            };
        } else if (utils.isThisYear(date)) {
            options = {
                day: "numeric",
                month: "long",
            };
        } else {
            options =  {
                day: "numeric",
                month: "long",
                year: "numeric",
            };
        }

        return date.toLocaleString("en-GB", options)
    };
    

    return (
        <div className={styles.divider}>
            {getTimeStamp(date)}
        </div>
    );
}

export default Divider;