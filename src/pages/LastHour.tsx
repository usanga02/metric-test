import React from "react";
import Averages from "../components/averages";
import Section from "../components/section";
import StackedBarChart from "../components/barchart";
import metrics from "../data/metrics";

type Props = {};

const LastHour = (props: Props) => {
  const {
    searches_current_last_hour,
    searches_previous_last_hour,
    clicks_current_last_hour,
    clicks_previous_last_hour,
    bookings_current_last_hour,
    bookings_previous_last_hour,
    avg_price_last_hour,
    str_last_hour,
    ctr_last_hour,
    web_pessimizer,
    mobile_pessimizer,
    errors_last_hour,
    zeroes_last_hour,
    timeout_last_hour,
  } = metrics.data[0];
  return (
    <div className="container">
      <Averages
        error={errors_last_hour}
        zeroes={zeroes_last_hour}
        timeouts={timeout_last_hour}
      />
      <StackedBarChart
        Error500={1256}
        Error501={800}
        Error502={650}
        Other={330}
      />
      <Section
        icon="../../Searches-icon.png"
        title="Searches"
        percentage="+5"
        resValue={searches_current_last_hour}
        prevValue={searches_previous_last_hour}
        title2={`Mobile Traffic: ${mobile_pessimizer}%`}
        title3={`Web Traffic: ${web_pessimizer}%`}
        desc="You get 100% traffic on mobile and desktop devices"
        help={["Searches", "Pessimisation"]}
      />
      <br className="line-break" />
      <Section
        icon="../../Clicks-icon.png"
        title="Clicks"
        percentage="-13"
        resValue={clicks_current_last_hour}
        prevValue={clicks_previous_last_hour}
        title2={`CTR: ${ctr_last_hour}%`}
        desc="Conversion from searches to clicks on all devices"
        help={["CTR", "Clicks"]}
      />
      <br className="line-break" />
      <Section
        icon="../../Sales-icon.png"
        title="Sales"
        resValue={bookings_current_last_hour}
        prevValue={bookings_previous_last_hour}
        title2={`STR: ${str_last_hour}%`}
        title3={`Avg. Check: ${avg_price_last_hour}`}
        desc="Conversion from clicks to bookings on all devices"
        help={["STR", "Bookings", "Avg. Check"]}
      />
    </div>
  );
};

export default LastHour;
