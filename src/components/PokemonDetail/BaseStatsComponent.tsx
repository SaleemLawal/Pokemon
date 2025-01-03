// import React from 'react'
import styles from "./BaseStatsComponent.module.scss";
import LinearProgress from "@mui/material/LinearProgress";

const BaseStatsComponent = ({
  stats,
  type,
}: {
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  type: string;
}) => {
  return (
    <div className={styles["base--stats"]}>
      {stats.map((statInfo, index) => {
        return (
          <div key={index}>
            <p>{statInfo.stat.name}</p>
            <p>{statInfo.base_stat}</p>
            <LinearProgress
              variant="determinate"
              value={statInfo.base_stat}
              style={{
                height: 7,
                borderRadius: 5,
              }}
              sx={{
                backgroundColor: "#e0e0e0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "unset",
                },
              }}
              className={`MuiLinearProgress-root ${type}`}
            />
          </div>
        );
      })}
      {/* <div>
        <p>Hp</p>
        <p>58</p>
        
      </div> */}
    </div>
  );
};

export default BaseStatsComponent;
