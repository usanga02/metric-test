import React from "react";
import Averages from "../components/averages";
import Section from "../components/section";
import StackedBarChart from "../components/barchart";
import metrics from "../data/metrics";

type Props = {};

const {
  errors_yesterday: [first, second, third],
} = metrics;

const Yesterday = (props: Props) => {
  const {
    searches_current_yesterday,
    searches_previous_yesterday,
    clicks_current_yesterday,
    clicks_previous_yesterday,
    bookings_current_yesterday,
    bookings_previous_yesterday,
    avg_price_yesterday,
    str_yesterday,
    ctr_yesterday,
    web_pessimizer,
    mobile_pessimizer,
    errors_yesterday,
    zeroes_yesterday,
    timeout_yesterday,
  } = metrics.data[0];

  return (
    <div className="container">
      <Averages
        error={errors_yesterday}
        zeroes={zeroes_yesterday}
        timeouts={timeout_yesterday}
      />
      <StackedBarChart
        Error500={0}
        Error501={0}
        Error502={0}
        Other={first.count + second.count}
      />
      <Section
        icon="/metric-test/Searches-icon.png"
        title="Searches"
        percentage="+5"
        resValue={searches_current_yesterday}
        prevValue={searches_previous_yesterday}
        title2={`Mobile Traffic: ${mobile_pessimizer.toFixed(2)}%`}
        title3={`Web Traffic: ${web_pessimizer}%`}
        desc="You get 100% traffic on mobile and desktop devices"
        help={["Searches", "Pessimisation"]}
      />
      <br className="line-break" />
      <Section
        icon="/metric-test/Clicks-icon.png"
        title="Clicks"
        percentage="-13"
        resValue={clicks_current_yesterday}
        prevValue={clicks_previous_yesterday}
        title2={`CTR: ${ctr_yesterday.toFixed(2)}%`}
        desc="Conversion from searches to clicks on all devices"
        help={["CTR", "Clicks"]}
      />
      <br className="line-break" />
      <Section
        icon="/metric-test/Sales-icon.png"
        title="Sales"
        resValue={bookings_current_yesterday}
        prevValue={bookings_previous_yesterday}
        title2={`STR: ${str_yesterday.toFixed(2)}%`}
        title3={`Avg. Check: ${avg_price_yesterday.toFixed(2)}`}
        desc="Conversion from clicks to bookings on all devices"
        help={["STR", "Bookings", "Avg. Check"]}
      />
    </div>
  );
};

export default Yesterday;
