import React from "react";

interface Props {
  timeFrame: "daily" | "hourly" | "weekly" | "monthly";
  setTimeFrame: (tf: "daily" | "hourly" | "weekly" | "monthly") => void;
}

const TimeFrameSelector: React.FC<Props> = ({ timeFrame, setTimeFrame }) => {
  const options: ("daily" | "hourly" | "weekly" | "monthly")[] = [
    "daily",
    "hourly",
    "weekly",
    "monthly",
  ];

  return (
    <div style={{ marginBottom: 20 }}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setTimeFrame(option)}
          style={{
            marginRight: 10,
            padding: "6px 12px",
            border: "1px solid black",
            cursor: "pointer",
            backgroundColor: timeFrame === option ? "orange" : "white",
            fontWeight: timeFrame === option ? "bold" : "normal",
          }}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TimeFrameSelector;
