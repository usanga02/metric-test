import React from "react";
import Averages from "../components/averages";
import Section from "../components/section";
import StackedBarChart from "../components/barchart";
import metrics from "../data/metrics";

type Props = {};

const Today = (props: Props) => {
  return (
    <div className="container">
      <Averages />
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
        resValue={0}
        prevValue={0}
        title2={`Mobile Traffic: ${0}%`}
        title3={`Web Traffic: ${0}%`}
        desc="You get 100% traffic on mobile and desktop devices"
        help={["Searches", "Pessimisation"]}
      />
      <br className="line-break" />
      <Section
        icon="../../Clicks-icon.png"
        title="Clicks"
        percentage="-13"
        resValue={0}
        prevValue={0}
        title2={`CTR: ${0}%`}
        desc="Conversion from searches to clicks on all devices"
        help={["CTR", "Clicks"]}
      />
      <br className="line-break" />
      <Section
        icon="../../Sales-icon.png"
        title="Sales"
        resValue={0}
        prevValue={0}
        title2={`STR: ${0}%`}
        title3={`Avg. Check: ${0}`}
        desc="Conversion from clicks to bookings on all devices"
        help={["STR", "Bookings", "Avg. Check"]}
      />
    </div>
  );
};

export default Today;
