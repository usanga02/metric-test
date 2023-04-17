import "./average.scss";
type Props = {
  title: string;
  percentage: number | null;
  average: number;
};

const Average = ({ title, percentage, average }: Props) => {
  return (
    <li className="average">
      <div>
        <h3>
          {title}: {percentage}%
        </h3>
      </div>
      <span>Average {average}%</span>
    </li>
  );
};

export default Average;
