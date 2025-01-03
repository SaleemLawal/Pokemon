// import React from 'react'
import styles from "./BaseStatsComponent.module.scss";
import LinearProgress from "@mui/material/LinearProgress";

const BaseStatsComponent = () => {
  return (
    <div className={styles["base--stats"]}>
      <div>
        <p>Hp</p>
        <p>58</p>
        <LinearProgress
          variant="determinate"
          value={58}
          style={{
            height: 7,
            borderRadius: 5,
          }}
          sx={{
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ff6b6b",
            },
          }}
        />
      </div>

      <div>
        <p>Attack</p>
        <p>64</p>
        <LinearProgress
          variant="determinate"
          value={64}
          style={{
            height: 7,
            borderRadius: 5,
          }}
          sx={{
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ff6b6b",
            },
          }}
        />
      </div>

      <div>
        <p>Defense</p>
        <p>58</p>
        <LinearProgress
          variant="determinate"
          value={58}
          style={{
            height: 7,
            borderRadius: 5,
          }}
          sx={{
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ff6b6b",
            },
          }}
        />
      </div>

      <div>
        <p>Special Attack</p>
        <p>80</p>
        <LinearProgress
          variant="determinate"
          value={80}
          style={{
            height: 7,
            borderRadius: 5,
          }}
          sx={{
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ff6b6b",
            },
          }}
        />
      </div>

      <div>
        <p>Special Defense</p>
        <p>65</p>
        <LinearProgress
          variant="determinate"
          value={65}
          style={{
            height: 7,
            borderRadius: 5,
          }}
          sx={{
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ff6b6b",
            },
          }}
        />
      </div>

      <div>
        <p>Speed</p>
        <p>80</p>
        <LinearProgress
          variant="determinate"
          value={80}
          style={{
            height: 7,
            borderRadius: 5,
          }}
          sx={{
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ff6b6b",
            },
          }}
        />
      </div>

      <div>
        <p>Total avg</p>
        <p>67.5</p>
        <LinearProgress
          variant="determinate"
          value={67.5}
          style={{
            height: 7,
            borderRadius: 5,
          }}
          sx={{
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ff6b6b",
            },
          }}
        />
      </div>
    </div>
  );
};

export default BaseStatsComponent;
