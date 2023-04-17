import "./section.scss";
type Props = {
  icon: string;
  title: string;
  percentage?: string;
  resValue: number;
  prevValue: number;
  title2: string;
  title3?: string;
  desc: string;
  help: string[];
};

const Section = ({
  icon = "",
  title = "",
  percentage = "",
  resValue = 0,
  prevValue = 0,
  title2 = "",
  title3 = "",
  desc = "",
  help = [],
}: Props) => {
  return (
    <div className="section-container">
      <div className="section-column">
        <img src={icon} width={50} height={50} />
        <div className="first-section">
          <div>
            <h3
              className={
                percentage ? (Number(percentage) < 0 ? "text-red" : "") : ""
              }
            >
              {title}
            </h3>
            {percentage ? (
              <span className={Number(percentage) < 0 ? "span-red" : ""}>
                {percentage}%
              </span>
            ) : (
              ""
            )}
          </div>
          <div>
            <h3>{resValue}</h3>
            <span>Yesterday</span>
          </div>
          <div className="gray-text">
            <h3>{prevValue}</h3>
            <span>Last Friday</span>
          </div>
        </div>
      </div>
      <div className="section-column">
        <div>
          <h3>{title2}</h3>
          <h3>{title3}</h3>
          <p className="gray-text">{desc}</p>
          <p>
            help:{" "}
            <span className="help">{help.map((item) => item + ", ")}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
