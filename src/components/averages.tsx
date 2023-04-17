import Average from "./average";
import "./averages.scss";
import metrics from "../data/metrics";

type Props = {
  error?: number | null;
  zeroes?: number | null;
  timeouts?: number | null;
};

const Averages = ({ error, zeroes, timeouts }: Props) => {
  const averages = [
    {
      title: "Errors",
      percentage: error ? parseFloat(error.toFixed(2)) : null,
      average: 0.11,
    },
    {
      title: "Zeroes",
      percentage: zeroes ? parseFloat(zeroes.toFixed(2)) : null,
      average: 0.11,
    },
    {
      title: "Timeouts",
      percentage: timeouts ? parseFloat(timeouts.toFixed(2)) : null,
      average: 0.11,
    },
  ];

  return (
    <ul className="list-item">
      {averages.map((item) => {
        return (
          <Average
            title={item.title}
            percentage={item.percentage}
            average={item.average}
          />
        );
      })}
    </ul>
  );
};

export default Averages;
