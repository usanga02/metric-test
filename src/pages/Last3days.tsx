import React from "react";
import Averages from "../components/averages";
import Section from "../components/section";
import StackedBarChart from "../components/barchart";
import metrics from "../data/metrics";

type Props = {};

const {
  errors_last_3days: [first, second, third],
} = metrics;

console.log(first, second, third);

const Last3days = (props: Props) => {
  const {
    searches_current_last_3days,
    searches_previous_last_3days,
    clicks_current_last_3days,
    clicks_previous_last_3days,
    bookings_current_last_3days,
    bookings_previous_last_3days,
    avg_price_last_3days,
    str_last_3days,
    ctr_last_3days,
    web_pessimizer,
    mobile_pessimizer,
    zeroes_last_3days,
    errors_last_3days,
    timeout_last_3days,
  } = metrics.data[0];
  return (
    <div className="container">
      <Averages
        error={errors_last_3days}
        zeroes={zeroes_last_3days}
        timeouts={timeout_last_3days}
      />
      <StackedBarChart
        Error500={0}
        Error501={0}
        Error502={first.count}
        Other={second.count + third.count}
      />
      <Section
        icon="../../Searches-icon.png"
        title="Searches"
        percentage="+5"
        resValue={searches_current_last_3days}
        prevValue={searches_previous_last_3days}
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
        resValue={clicks_current_last_3days}
        prevValue={clicks_previous_last_3days}
        title2={`CTR: ${ctr_last_3days}%`}
        desc="Conversion from searches to clicks on all devices"
        help={["CTR", "Clicks"]}
      />
      <br className="line-break" />
      <Section
        icon="../../Sales-icon.png"
        title="Sales"
        resValue={bookings_current_last_3days}
        prevValue={bookings_previous_last_3days}
        title2={`STR: ${str_last_3days}%`}
        title3={`Avg. Check: ${avg_price_last_3days}`}
        desc="Conversion from clicks to bookings on all devices"
        help={["STR", "Bookings", "Avg. Check"]}
      />
    </div>
  );
};

export default Last3days;
